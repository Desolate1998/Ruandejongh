import * as THREE from './Vendor/three.module.js';
var canvas = document.getElementById('waves')
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(600, window.innerWidth / 300, 2, 90000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: canvas, });
const light = new THREE.PointLight('lightblue', 1, 100);
camera.position.z = 700

renderer.setClearColor("#1A2B31"); //old #1d1d1d
renderer.setSize(window.innerWidth, 300);
renderer.setClearColor(0x000000, 0);

light.position.set(10, 0, 0);
scene.add(light);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, 300);
    camera.aspect = window.innerWidth / 300;
    camera.updateProjectionMatrix();
})


var squerGeo = new THREE.BoxGeometry(300, 400);

var sqMatreal = new THREE.MeshBasicMaterial({ color: 'red', transparent: false });
var sq = new THREE.Mesh(squerGeo, sqMatreal)
sq.position.z = 401

//scene.add(sq)
var spheres = []

//create objects
for (let row = -400; row <= 400; row++) {
    var rows = []
    for (let columns = -15; columns <= 15; columns++) {
        var geometry = new THREE.SphereGeometry(5, 5);
        var r = Math.random();
        var material;

        if (-40 < row && row < -10) {
            material = new THREE.MeshBasicMaterial({ color: '#4D9EA3', transparent: true, opacity: 0.5 });
        } else if (-10 < row && row < 10) {
            material = new THREE.MeshBasicMaterial({ color: '#56b6bb', transparent: true, opacity: 0.5 });
        } else {
            material = new THREE.MeshBasicMaterial({ color: '#61cbd1', transparent: true, opacity: 0.5 });
        }


        var sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = row * 80
        sphere.position.y = columns * 30 + Math.random() * 200
        sphere.position.z = columns * -20
        rows.push({ object: sphere, goingUp: true })
        scene.add(sphere);

    }
    spheres.push(rows)
}






//animation
const rendering = function() {
    var limit = 600
    var moveAmount = 100
    requestAnimationFrame(rendering);
    for (let row = 0; row < spheres.length; row++) {
        for (let column = 0; column < spheres[row].length; column++) {
            moveAmount = Math.random() * 10
            if (spheres[row][column].goingUp == true) {
                if (spheres[row][column].object.position.y > row + limit) {
                    spheres[row][column].goingUp = false;
                    spheres[row][column].object.position.y -= moveAmount;
                } else {
                    spheres[row][column].object.position.y += moveAmount;
                }
            } else {
                if (spheres[row][column].object.position.y < row - limit) {
                    spheres[row][column].goingUp = true;
                    spheres[row][column].object.position.y += moveAmount;
                } else {
                    spheres[row][column].object.position.y -= moveAmount;
                }
            }

        }

    }


    renderer.render(scene, camera);
}
rendering();