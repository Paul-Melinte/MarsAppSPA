import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"

export const MarsPhotos: React.FC = () => {
    const [roverApiData, setRoverApiData] = useState([]);
    const [selectedRover, setSelectedRover] = useState("");
    const [selectedCamera, setSelectedCamera] = useState("");
    const [selectedSol, setSelectedSol] = useState(0);

    const getRoverData = async () => {
        const roverData = await axios.get("http://localhost:8000/api/rovers/");
        setRoverApiData(roverData.data);

        
    };

    useEffect(() => {
        getRoverData();
    },[]);


    return (
        <form>
            <label>
                Select Rover:
                <Select name="roverSelect" options={[]}/>
            </label>
        </form>
    );
}