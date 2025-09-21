// 1. Escena, cámara y renderizador
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1.5, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// 2. Luz
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// 3. Cargar modelo de laptop
let laptop;
const loader = new THREE.GLTFLoader();
loader.load('laptop.glb', function(gltf) {
    laptop = gltf.scene;
    laptop.scale.set(1.5, 1.5, 1.5);
    laptop.position.set(0, -0.5, 0);
    laptop.rotation.x = 0.5; // tapa ligeramente cerrada
    scene.add(laptop);
}, undefined, function(error) {
    console.error(error);
});

// 4. Animación
function animate() {
    requestAnimationFrame(animate);

    if(laptop){
        // Abrir tapa lentamente hasta 0 radianes
        if(laptop.rotation.x > 0) laptop.rotation.x -= 0.005;
    }

    renderer.render(scene, camera);
}

animate();

// 5. Ajustar tamaño al redimensionar ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
