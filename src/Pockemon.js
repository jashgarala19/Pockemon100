import { useLocation } from 'react-router-dom';
import React, { useEffect } from "react";
import './Pockemon.css'
const Pockemon = (() => {
    const location = useLocation()
    const { mypockemon } = location.state
    let bgcolor = "blue";
    let txtcolor = "black";

    return (

        <div className="MyPockemonContainer">
                
            <h1 style={{ color: "black" }}>{mypockemon.name.english} <span className="MyPockemonid">#{mypockemon.id}</span></h1>
            <div className="MyPockemonDetailsandImg">
                <div className="MyPockemonImgDiv"><img className="MyPockemonImg" src={mypockemon.hires} /></div>

                <div className="MyPockemonDetails">
                    <p style={{ color: "grey" }}>Description</p>
                    <p>{mypockemon.description}</p>
                    <div className="MyPockemonTypeandSpecies">
                        <div className="MyPockemontype-text-div">
                            <p style={{ color: "grey" }}>Type</p>

                            <div className="MyPockemonTypeDiv">
                                {
                                    mypockemon.type.map((v) => {

                                        {

                                            if (v === "Fairy") {
                                                bgcolor = "#e9e";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Steel") {
                                                bgcolor = "#aab";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Dark") {
                                                bgcolor = "#754";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Dragon") {
                                                bgcolor = "#76e";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Ghost") {
                                                bgcolor = "#66b";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Rock") {
                                                bgcolor = "#ba6";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Bug") {
                                                bgcolor = "#ab2";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Psychic") {
                                                bgcolor = "#f59";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Flying") {
                                                bgcolor = "#89f";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Ground") {
                                                bgcolor = "#db5";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Poison") {
                                                bgcolor = "#a59";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Fighting") {
                                                bgcolor = "#b54";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Ice") {
                                                bgcolor = "#6cf";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Grass") {
                                                bgcolor = "#7c5";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Electric") {
                                                bgcolor = "#fc3";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Water") {
                                                bgcolor = "#39f";
                                                txtcolor = "white";
                                            }
                                            else if (v === "Fire") {
                                                bgcolor = "#f42";
                                                txtcolor = "white";
                                          
                                            }
                                            else if (v === "Normal") {
                                                bgcolor = "#aa9";
                                                txtcolor = "white";
                                            }
                                        }

                                        return (


                                            <p className="MyPockemontype-text" style={{ backgroundColor: bgcolor, color: txtcolor }}>{v}</p>


                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                        <div className="MyPockemonSpeciesType">
                            <p style={{ color: "grey" }}>Species</p>
                            <p >{mypockemon.species}</p>
                        </div>
                        <div className="MyPockemonSpeciesType">
                            <p style={{ color: "grey" }}>Height</p>
                            <p >{mypockemon.profile.height}</p>
                        </div>
                        <div className="MyPockemonSpeciesType">
                            <p style={{ color: "grey" }}>Weight</p>
                            <p >{mypockemon.profile.weight}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
})

export default Pockemon;