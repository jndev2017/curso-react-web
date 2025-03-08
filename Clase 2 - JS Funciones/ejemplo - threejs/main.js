import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Viewer {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initControls();
        this.initObjects();
        this.bindWithDivTag("viewer");

        this.animate();
    }

    initScene() {
        this.scene = new THREE.Scene();
    }

    initCamera() {
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
        this.camera.position.z = 5;
    }

    initRenderer() {
        try {
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(this.width, this.height);

            window.addEventListener('resize', () => {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            });
        } catch (error) {
            console.error("WebGL no es soportado en este navegador.", error);
            alert("Tu navegador no soporta WebGL. Por favor, usa un navegador moderno.");
        }
    }

    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
    }

    initObjects() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.cube);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        this.scene.add(light);
    }

    bindWithDivTag(idName) {
        let domElement = document.getElementById(idName);
        domElement.appendChild(this.renderer.domElement);
    }

    animate() {
    	// Función flecha dentro del animation loop
    	// para indicarle que la función pasada por parámetro
    	// tenga contexto global (clase Viewer)

    	// Si no se agrega o se usa una función tradicional (function())
    	// No tiene el contexto global y no puede acceder a cada atributo/método
    	// de la clase Viewer
        this.renderer.setAnimationLoop(() => {
            this.controls.update();
            this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
        });
    }

    destroy() {
        this.renderer.setAnimationLoop(null);
        this.controls.dispose();

        if (this.renderer.domElement.parentElement) {
            this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
        }

        this.scene.traverse((object) => {
            if (object.isMesh) {
                object.geometry.dispose();
                object.material.dispose();
            }
        });

        this.renderer.dispose();
    }
}

let viewer = new Viewer(window.innerWidth, window.innerHeight);