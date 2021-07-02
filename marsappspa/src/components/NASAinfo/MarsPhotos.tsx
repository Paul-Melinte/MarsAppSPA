import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"
import "./MarsPhotos.css"

export const MarsPhotos: React.FC = () => {
    const [roverSelectApiData, setRoverSelectApiData] = useState<any[]>([]);
    const [selectedRover, setSelectedRover] = useState("");
    const [selectedCamera, setSelectedCamera] = useState("");
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


    return (
        <form className="Mars-form">
            <label>
                Select Rover:
                <Select name="roverSelect" options={roverSelectApiData} className="Mars-select"/>
            </label>
        </form>
    );
}