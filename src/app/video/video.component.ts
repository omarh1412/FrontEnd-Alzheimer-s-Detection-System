import { Component, ElementRef, ViewChild } from '@angular/core';
import { Storage } from 'aws-amplify/storage';

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
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'recorded-video.webm';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(downloadLink);
    };
  }
}
