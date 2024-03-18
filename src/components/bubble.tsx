import { Sparkles, Float } from "@react-three/drei";
import { useState } from "react";

interface BubbleProps {
    pos: [number, number, number];
    color: string
}
export function Bubble(props: BubbleProps) {
    const [size, setSize] = useState(1)
    function embiggen () {
        setSize(size * 1.1)
    }
    return (

        <Float speed={8}
        floatingRange={[1, 9]}>
        <mesh position={props.pos} scale={size} onClick={embiggen}>
        <Sparkles count={25} scale={size *2 } size={7} speed={1}/>
            <sphereBufferGeometry />
            <meshStandardMaterial color={props.color} />
        </mesh>
        </Float>
    );
}
