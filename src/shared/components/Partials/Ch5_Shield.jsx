/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Shield(props) {
  const { nodes, materials } = useGLTF("/Shield.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        rotation={[1.49, 0.11, -0.62]}
        scale={2}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh066.geometry}
          material={materials["lambert1.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh066_1.geometry}
          material={materials.lambert2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Shield.glb");
