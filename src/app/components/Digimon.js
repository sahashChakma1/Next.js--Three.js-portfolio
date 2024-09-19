'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { a } from '@react-spring/three';

const Digimon = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/digimon.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.play();
    }
  }, [actions]);

  // Remove automatic rotation
  return (
    <a.group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={46.5}>
          <group name="chr329fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.chr329a02}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.chr329a01}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" scale={9.28} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

useGLTF.preload('/models/digimon.glb');

export default Digimon;
