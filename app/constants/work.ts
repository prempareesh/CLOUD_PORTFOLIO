import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(2, 0.5, -1),
    year: '2024',
    title: 'NECN - CSE (Data Science)',
    subtitle: 'Started B.Tech in Computer Science and Engineering (Data Science)',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'Early 2025',
    title: '2x Hackathon Winner',
    subtitle: 'Won 1st place in 2 hackathons (GDG & Technogyan)',
    position: 'left',
  },
  {
    point: new THREE.Vector3(4, 1, -6),
    year: 'Mid 2025',
    title: 'Innovative AI Projects',
    subtitle: 'Built multiple AI systems using LLMs, RAG, and automation',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -1, -10),
    year: 'Late 2025',
    title: 'Pursuing 2nd Year',
    subtitle: 'Currently continuing 2nd year of engineering',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2026',
    title: 'Future Growth',
    subtitle: 'Working on advanced AI systems and scaling projects',
    position: 'right',
  }
];