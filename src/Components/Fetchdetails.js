import React, { useEffect, useState } from "react";

const Fetchdetails = () => {
  const [data, setSata] = useState();
  const [info,setInfo]=useState(false);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "connect.sid=s%3AuUWowenxN3z6zUsTbkz_0vWOBLc34Sli.0qHNs%2FAiY2b2M7k9u6ticFc9v5UdIPkSJUulG3vlF5Q"
    );

    var raw = JSON.stringify({
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://hoblist.com/api/movieList", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).result);
        setSata(JSON.parse(result).result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        <button style={{marginTop:"10px",width:"150px" ,borderRadius:"7px" ,color:"white",background:"blue",border:"none"}}onClick={()=>setInfo(!info)}><h3>Company Info</h3></button>
        {info?<div style={{border:"2px solid black",padding:"10px",margin:"10px"}}>
        <h3 style={{display:"inline"}}>Company:{" "}</h3>Geeksynergy Technologies Pvt Ltd
        <br/>
        <h3 style={{display:"inline"}}>Address:{" "}</h3>Sanjaynagar, Bengaluru-56
        <br/>
        <h3 style={{display:"inline"}}>Phone:{" "}</h3>XXXXXXXXXX09
        <br/>
        <h3 style={{display:"inline"}}>Email:{" "}</h3>XXXXXXX@gmail.com
        </div>:<></>}
      {data &&
        data.map((ele) => {
          return (
            <div style={{display:"flex"}}>
              <div style={{width:"700px",height:"75vh"}}>
                <div style={{ display: "flex", margin: "30px" }}>
                  <div
                    className="poster"
                    style={{ height: "300px", widht: "300px" }}
                  >
                    <img
                      src={ele.poster}
                      style={{ height: "300px", widht: "300px" }}
                    ></img>
                  </div>
                  <div className="details" style={{ margin: "30px" }}>
                    <div>
                      <h2>{ele.title}</h2>
                      <h6>Genre: {ele.genre}</h6>
                      <h6>Director: {ele.director}</h6>
                      <h6>Starring: {ele.stars}</h6>
                      <span>{ele.runTime}Mins</span> |
                      <span> {ele.language} </span> |{" "}
                      <span>
                        {new Date(
                          Number(ele.releasedDate) * 1000
                        ).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <br />
                      <span style={{ color: "#519aff" }}>
                        {ele.pageViews} views
                      </span>{" "}
                      |{" "}
                      <span style={{ color: "#519aff" }}>
                        Voted by {ele.totalVoted} People
                      </span>
                      <div />
                    </div>
                  </div>
                </div>
               <div style={{display:"flex",justifyContent:"center"}}>
               <button
                  style={{
                    width: "90%",
                    height: "40px",
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#519aff",
                  
                  }}
                >
                  Watch Trailer
                </button></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Fetchdetails;
