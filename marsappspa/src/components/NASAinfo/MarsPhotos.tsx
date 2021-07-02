import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"
import "./MarsPhotos.css"

export const MarsPhotos: React.FC = () => {
    const [roverSelectApiData, setRoverSelectApiData] = useState<any[]>([]);
    const [selectedRover, setSelectedRover] = useState("");
    const [cameraSelectData, setCameraSelectData] = useState<any[]>([]);
    const [selectedCamera, setSelectedCamera] = useState("");
    const [maxSol, setMaxSol] = useState(0);
    const [selectedSol, setSelectedSol] = useState(0);

    const getRoverData = async () => {
        const roverData = await axios.get("http://localhost:8000/api/rovers/");
        
        const rovers: any[] = roverData.data;

        const selectRovers = rovers.map(rover => ({
            "value": rover,
            "label": rover.name
        }));

        setRoverSelectApiData(selectRovers);
    };

    useEffect(() => {
        getRoverData();
    },[]);

    function onRoverSelect(event: any) {
        setSelectedRover(event.label);

        const cameras: any[] = event.value.cameras;

        setCameraSelectData(cameras.map(camera => ({
            "value": camera,
            "label": camera
        })));

        setMaxSol(event.value.max_sol);
    }

    return (
        <form className="Mars-form">
            <label>
                Select Rover:
                <Select name="roverSelect" options={roverSelectApiData} className="Mars-select" onChange={onRoverSelect}/>
            </label>
            <label>
                Select camera:
                <Select name="cameraSelect" options={cameraSelectData} />
            </label>
            <label>
                Select Mars day, maximum {maxSol}
            </label>
        </form>
    );
}