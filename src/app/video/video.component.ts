import { Component, ElementRef, ViewChild } from '@angular/core';
import { uploadData } from 'aws-amplify/storage';
import { getCurrentUser } from 'aws-amplify/auth';
import { post } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  stream: any;
  @ViewChild('videoElement') videoElementRef: ElementRef | any;

  private mediaRecorder: any;
  private videoStream: any;
  private recordedChunks: BlobPart[] = [];

  ngOnInit() {}
  async postTodo() {
    try {
      await fetchAuthSession();

      const restOperation = post({
        apiName: 'pets',

        path: '/pets',

        options: {
          body: {
            message: 'Mow the lawn',
          },
        },
      });

      const { body } = await restOperation.response;

      const response = await body.json();

      console.log('POST call succeeded');

      console.log(response);
    } catch (e: any) {
      console.log('POST call failed: ', e);
    }
  }
  async ngAfterViewInit() {
    const videoElement = this.videoElementRef.nativeElement;

    try {
      this.videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoElement.srcObject = this.videoStream;
      this.mediaRecorder = new MediaRecorder(this.videoStream);

      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };
    } catch (error) {
      console.error('Error accessing the webcam', error);
    }
  }

  startRecording() {
    this.recordedChunks = [];
    this.mediaRecorder.start();
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.mediaRecorder.onstop = () => {
      const blob = new Blob(this.recordedChunks, {
        type: 'video/webm',
      });

      const fileToBeUploaded = new File([blob], 'recorded-video.webm', {
        type: 'video/webm',
      });
      const fileName = Math.random();
      this.uploadToS3(fileName, fileToBeUploaded);

      // const url = URL.createObjectURL(blob);
      // const downloadLink = document.createElement('a');
      // downloadLink.href = url;
      // downloadLink.download = 'recorded-video.webm';
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      // URL.revokeObjectURL(url);
      // document.body.removeChild(downloadLink);
    };
  }

  async uploadToS3(fileName: any, fileToBeUploaded: any) {
    try {
      //await Auth.currentSession(); // Ensures authentication state
      const { username, userId, signInDetails } = await getCurrentUser();

      const result = await uploadData({
        key: fileName,
        data: fileToBeUploaded,
        options: {
          accessLevel: 'guest',
        },
      }).result;
      console.log('Succeeded: ', result);
    } catch (error) {
      console.log('Error : ', error);
    }
  }
}
