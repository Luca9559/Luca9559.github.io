import { Component } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-animation',
  templateUrl: './three-animation.component.html',
  styleUrls: ['./three-animation.component.scss']
})
export class ThreeAnimationComponent {
  createBox(): void {
    const canvas = document.getElementById('canvas');

    const scene = new THREE.Scene();

    const material = new THREE.MeshToonMaterial();

    const ambientLight = new THREE.AmbientLight(0x009999, 0.5);
    scene.add(ambientLight);

    const light = new THREE.PointLight(0x000000, 0.5);
    light.position.set(30,30,30);
    scene.add(light);

    const box = new THREE.Mesh(new THREE.BoxGeometry(18.5, 18.5, 18.5), material);

    scene.add(box);

    const canvasSizes = {
      width: 300,
      height: 150,
    };

    const camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    );
    camera.position.z = 30;
    scene.add(camera);

    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setClearColor(0xeffffff, 1);
    renderer.setSize(canvasSizes.width, canvasSizes.height);

    const clock = new THREE.Clock();

    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();

      box.rotation.x = elapsedTime;
      box.rotation.y = elapsedTime;
      box.rotation.z = elapsedTime;

      renderer.render(scene, camera);

      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }

  ngOnInit(): void {
    this.createBox();
  }

}
