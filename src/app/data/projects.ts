import { Title } from "@angular/platform-browser";

export interface Project {
    title: string;
    logo?: string;
    shortDesc: string;
    longDesc: string;
    tech: string;
    github?: string;
    website?: string;
    priority: Number;
}

export const PROJECTS: Project[] = [
    {
        title: "Notes-Scribe",
        logo: 'assets/ProjectLogos/NoteScribeLogo.png',
        shortDesc: "A cloud-based note taking app",
        longDesc: "Create, edit, and sync notes seamlessly across devices. Built for speed and simplicity",
        tech: "Angular, NestJS, AWS, GCP, Firebase",
        github: "https://github.com/Keerthi598/notes",
        website: "https://notes-scribe.com/",
        priority: 1
    },

    {
        title: "Fluid Simulation",
        logo: 'assets/ProjectLogos/FluidSwirl.png',
        shortDesc: "A real-time 2D stable fluid animation",
        longDesc: "Simulates fluid motion using velocity fields and advection with interactive mouse control",
        tech: "c++, MVC",
        github: "https://github.com/Keerthi598/FluidAnimation",
        priority: 1
    },

    {
        title: "BLE On Raspberry Pi",
        logo: 'assets/ProjectLogos/Bluetooth.png',
        shortDesc: "Control LED lights through a phone app through BLE with a Raspberry Pi",
        longDesc: "Prototype demonstrating BLE device control through a custom Python service",
        tech: "Python, Bluetooth Low Energy (BLE)",
        github: "https://github.com/Keerthi598/ECU",
        priority: 1
    },
    
    {
        title: "Plastic Scanner",
        logo: 'assets/ProjectLogos/PlasticScan.png',
        shortDesc: "University Capstone Project with GM",
        longDesc: "Developed a plastic scanning system proptoype used in assembly plants",
        tech: "Involves embedded software and hardware integration. More details on the official Capstone site",
        github: "https://github.com/Keerthi598/Capstone",
        website: "https://capstone.cse.msu.edu/2024-08/projects/gm-ris/",
        priority: 2
    },
    
    {
        title: "Ray Tracing Renderer",
        logo: 'assets/ProjectLogos/RayTrace.png',
        shortDesc: "A ray tracing engine built from scratch",
        longDesc: "Simulates light reflection and refraction to render realistic 3D scene",
        tech: "c++",
        github: "https://github.com/Keerthi598/RayTracingDemo",
        priority: 2
    },

    {
        title: "ThinkFast",
        logo: 'assets/ProjectLogos/Android.png',
        shortDesc: "A collaborative quiz app for creating and sharing custom question sets",
        longDesc: "Features leaderboards, friend lists, and real-time score tracking using Firebase",
        tech: "Java, Android SDK, Firebase",
        github: "https://github.com/Keerthi598/ThinkFast",
        priority: 2
    },

    {
        title: "Sudoku Game",
        logo: 'assets/ProjectLogos/sudoku.png',
        shortDesc: "A Sudoku game with a unique gameplay",
        longDesc: "Features mascot-based puzzle mechanics and robust OOP architecture",
        tech: "C++, wxWidgets",
        github: "https://github.com/Keerthi598/Sudoku",
        priority: 2
    },

    {
        title: "Parking Simulator",
        logo: 'assets/ProjectLogos/Android.png',
        shortDesc: "A simple 2D parking simluation demo",
        longDesc: "Android demo app simulating parking lot reservations using Jetpack Compose, Room, and MVVM ",
        tech: "kotlin, android, sqlite",
        github: "https://github.com/Keerthi598/Parking-Sim-App",
        priority: 3
    },

    {
        title: "GeoGuesser ML Model",
        logo: 'assets/ProjectLogos/GeoGuessr.png',
        shortDesc: "An image classifier inspired by GeoGuesser",
        longDesc: "Trained deep learning models to predict U.S. states from images",
        tech: "Python, PyTorch, CNNs",
        github: "https://github.com/ToffeeNTea/CSE404-Group-Project",
        priority: 3
    }
]