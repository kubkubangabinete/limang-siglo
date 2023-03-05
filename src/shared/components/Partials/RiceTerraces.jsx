import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function RiceTerraces(props) {
  const { nodes, materials } = useGLTF("/rice-terraces.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3838.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[0.12, 1.29, -1.52]}
        rotation={[Math.PI / 2, 0, -2.95]}
        scale={1.38}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3837.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[1.67, 1.24, -1.5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.84, 1.23, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3841.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-2.7, -0.71, 0.88]}
        rotation={[1.76, -0.19, 1.19]}
        scale={[3.11, 1.8, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3840.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-2.52, -0.64, 0.3]}
        rotation={[Math.PI / 2, 0, -2.96]}
        scale={[2.22, 1.28, 1.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3839.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-0.22, -0.6, 2.74]}
        rotation={[Math.PI / 2, 0, 0.22]}
        scale={[3.97, 2.28, 2.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3835.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-1.88, 0.39, -1.47]}
        rotation={[1.57, 0, -1.77]}
        scale={[2.83, 1.62, 1.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3832.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[0.75, -0.59, 1.39]}
        rotation={[1.57, 0, 1.4]}
        scale={[3.97, 2.28, 2.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3831.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[1.12, -0.13, 1.44]}
        rotation={[1.76, -0.19, 2.37]}
        scale={[3.11, 1.8, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3825.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-1.47, -0.18, -0.22]}
        rotation={[Math.PI / 2, 0, -1.78]}
        scale={[2.22, 1.28, 1.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3826.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-1.69, -0.15, -0.39]}
        rotation={[Math.PI / 2, 0, -2.73]}
        scale={[2.83, 1.62, 1.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3829.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-2.18, -0.16, -1.95]}
        rotation={[1.46, 0.02, 2.32]}
        scale={[2.83, 1.62, 1.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3830.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[1.72, -0.69, 3.32]}
        rotation={[1.49, -0.08, -3.02]}
        scale={[3.11, 1.8, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3828.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[1.88, -0.67, 3.28]}
        rotation={[Math.PI / 2, 0, 1.4]}
        scale={[3.97, 2.28, 2.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3827.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[1.88, -0.53, 3.34]}
        rotation={[Math.PI / 2, 0, 2.35]}
        scale={[3.11, 1.8, 1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3842.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[2.9, -0.68, 1.46]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.84, 1.23, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3843.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[2.94, -0.66, 1.51]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.84}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3838001.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-2.51, -0.66, 2.93]}
        rotation={[Math.PI / 2, 0, 0.09]}
        scale={0.84}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3839001.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-2.54, -0.66, 2.85]}
        rotation={[Math.PI / 2, 0, 1.8]}
        scale={[1.22, 1.93, 0.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3839002.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-0.41, 0.42, -0.73]}
        rotation={[Math.PI / 2, 0, 0.88]}
        scale={[3.97, 2.28, 2.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3838002.geometry}
        material={materials["Hut2:Grass.002"]}
        position={[-1, 1.29, -2.7]}
        rotation={[Math.PI / 2, 0, 2.16]}
        scale={1.38}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube2002.geometry}
        material={materials["Rice terraces"]}
        position={[-0.24, 1.12, -2.22]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.96, 1.95, 1.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube3.geometry}
        material={materials["Rice terraces"]}
        position={[0.04, 0.67, -1.85]}
        rotation={[Math.PI / 2, 0, -0.03]}
        scale={[3.6, 3.58, 2.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube4.geometry}
        material={materials["Rice terraces"]}
        position={[0.31, 0.11, -1.54]}
        rotation={[Math.PI / 2, 0, -0.45]}
        scale={[4.51, 4.18, 0.59]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube5.geometry}
        material={materials["Rice terraces"]}
        position={[0.2, -0.41, -1.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.54, 6.57, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube6.geometry}
        material={materials["Rice terraces"]}
        position={[0.37, -1.18, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5.66, 9.86, 0.99]}
      />
    </group>
  );
}

useGLTF.preload("/rice-terraces.glb");