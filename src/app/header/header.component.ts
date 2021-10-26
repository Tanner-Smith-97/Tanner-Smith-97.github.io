import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from "three";
import {Variable} from "three/examples/jsm/misc/GPUComputationRenderer";
import {privateEntriesToIndex} from "@angular/compiler-cli/src/metadata/index_writer";
import {Color} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  //* Cube Properties

  @Input() public rotationSpeedX: number = 0.005;

  @Input() public rotationSpeedY: number = 0.001;

  @Input() public size: number = 800;

  @Input() public texture: string = "/assets/tanner.jpg";


  //* Stage Properties

  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = .3;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 10000;

  //? Helper Properties (Private Properties);

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1, 1, 1);
  private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  /**
   *Animate the cube
   *
   * @private
   * @memberof CubeComponent
   */
  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x50dfb3);
    //this.scene.background = new THREE.Color(0x000000);
    this.scene.add(this.cube);
    for(let i = 0; i < 250; i++){
      this.addStar();
    }


    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }



  // function addStar() {
  //   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  //   const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  //   const star = new THREE.Mesh(geometry, material);
  //
  //   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(50));
  //
  //   star.position.set(x, y, z);
  //   scene.add(star);
  // }

  private addStar() {
    let texture: string = "/assets/tanner.jpg";



    let sphereGeo = new THREE.SphereGeometry(0.25, 6, 6);
    let sphereMat = new THREE.MeshStandardMaterial({color: 0xffffff});
    let star = new THREE.Mesh(sphereGeo, sphereMat);



    //for(let i = 0; i < 50; i++){
      // @ts-ignore
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(50));

      star.position.set(x, y, z);
      console.log(x, y, z);
      this.scene.add(star);
      console.log(this.scene.add(star));
   // }



  }



  //build stars
  //public stars: Array<any> = new Array(200).fill().forEach(this.addStar());





  /**
   * Start the rendering loop
   *
   * @private
   * @memberof CubeComponent
   */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: HeaderComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.createScene();

    //build stars
    // @ts-ignore
    //Array(200).fill().forEach(this.addStar());
    // this.addStar();

    //orbiter


    this.startRenderingLoop();

    let controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

}
