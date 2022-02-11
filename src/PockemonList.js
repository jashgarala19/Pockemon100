
import Mydata from './Data.json';
import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link } from 'react-router-dom';
// import {LazyLoadImage} from 'react-lazy-load-image-component';

const PockemonList = (() => {

	const [searchTerm, setSearchTerm] = useState("")
	let bgcolor = "blue";
	let txtcolor = "black";
	const [myslice, setSlice] = useState({ count: 20 })
	let comp;


	const loadmorepockemons = (() => {

		setSlice(prev => ({ ...prev, count: prev.count + 10 }));


	});
	useEffect(() => {
		console.log(alldata.length);
	});

	const alldata = Mydata.filter((val) => {

		if (searchTerm.toString() == "") {
			
		return val

		}
		else if (val.id.toString().includes(searchTerm.toString())) {
			
			if (val.id.toString() === searchTerm.toString()) {
		
				return val

			}



		}
		else if (val.name.english.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())) {
	
			return val
		}


	}).slice(0, myslice.count).map((value) =>

		<li className="pockemoncontainer"  >
			{

				value.type.slice(0, 1).map((v) => {

					{

						if (v === "Fairy") {
							bgcolor = "rgb(252, 233, 252)";
							// txtcolor = "white";
						}
						else if (v === "Steel") {
							bgcolor = "rgb(198, 198, 210)";
							// txtcolor = "white";
						}
						else if (v === "Dark") {
							bgcolor = "#dac6be";
							// txtcolor = "white";
						}
						else if (v === "Dragon") {
							bgcolor = "rgb(174, 163, 245)";
							// txtcolor = "white";
						}
						else if (v === "Ghost") {
							bgcolor = "rgb(202, 202, 231)";
							// txtcolor = "white";
						}
						else if (v === "Rock") {
							bgcolor = "rgb(231, 225, 202)";
							// txtcolor = "white";
						}
						else if (v === "Bug") {
							bgcolor = "rgb(237, 243, 190)";
							// txtcolor = "white";
						}
						else if (v === "Psychic") {
							bgcolor = "rgb(255, 179, 209)";
							// txtcolor = "white";
						}
						else if (v === "Flying") {
							bgcolor = "rgb(179, 190, 255)";
							// txtcolor = "white";
						}
						else if (v === "Ground") {
							bgcolor = "rgb(242, 230, 191)";
							// txtcolor = "white";
						}
						else if (v === "Poison") {
							bgcolor = "rgb(229, 204, 224)";
							// txtcolor = "white";
						}
						else if (v === "Fighting") {
							bgcolor = "rgb(235, 204, 199)";
							// txtcolor = "white";
						}
						else if (v === "Ice") {
							bgcolor = "rgb(179, 230, 255)";
							// txtcolor = "white";
						}
						else if (v === "Grass") {
							bgcolor = "rgb(208, 237, 196)";
							// txtcolor = "white";
						}
						else if (v === "Electric") {
							bgcolor = "rgb(255, 236, 179)";
							// txtcolor = "white";
						}
						else if (v === "Water") {
							bgcolor = "rgb(179, 217, 255)";
							// txtcolor = "white";
						}
						else if (v === "Fire") {
							bgcolor = "rgb(255, 233, 230)";
							// txtcolor = "white";
						}
						else if (v === "Normal") {
							bgcolor = "rgb(220, 220, 213)";
							// txtcolor = "white";
						}
					}

					return (

						< >

							<Link to={`/Pockemon/${value.id}`} state={{ mypockemon: value }}>


								<img className="Imgstyle" src={value.hires} style={{ backgroundColor: bgcolor, color: txtcolor }} /></Link>
						</>
					)
				}
				)
			}


			{/* <Link to={`/Pockemon/${value.id}`}>
				<LazyLoadImage src={value.hires}  effect="blur" width="200px" heigh="500px" / ></Link> */}
			<p className="pockid">#{value.id}</p>
			<p className="pockname">{value.name.english}</p>
			<div className="pocketype">
				{

					value.type.map((v) => {

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

							<div >

								<p className="pocketype-text" style={{ backgroundColor: bgcolor, color: txtcolor }}>{v}</p>
							</div>
						)
					}
					)
				}
			</div>
		</li>
	)

	{
		if(alldata.length==0)
		{
			comp =<h1>No Pockemon Found</h1>
		}
		else
		{
			comp = alldata
		}
	}

	return (


		<>

			<div className="searchdiv">
				<input type="text" className={'form-control'} placeholder="Search Pockemon By Id | Name" onChange={(event) => { setSearchTerm(event.target.value); }} />
			</div>

			<div className="mycontainer">

				{comp}


				{/* {alldata} */}
			</div>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
				<button onClick={loadmorepockemons} className="btn" >Load More</button>
			</div>

		</>

	)
}
)
export default PockemonList