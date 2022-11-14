import React, { useEffect } from "react";
import data from "../../apis/Gym.postman_collection.json";
// import data2 from "../../apis/staging.postman_environment.json";
import img from "../../../src/static/logo.png";
import img2 from "../../../src/static/logo2.jpg";
import img3 from "../../../src/static/logo3.png";
import { Link } from "react-router-dom";

export default function Main() {
  const getData = () => {
    console.log(data.item[0].item[0]);
    // console.log(data2);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="container">
        <div className="search-map d-flex justify-content-between py-3">
          <div className="search d-flex w-50 position-relative light-boxshadow">
            <input
              className="form-control p-3 px-4"
              placeholder="Seach Gym by name , facilities"
            />
            <button className="btn button-main w-150px">Find Gyms</button>
            <span className="filter">Filter</span>
          </div>
          <div className="map light-boxshadow">
            <button className="btn btn-switch">Switch To Map View</button>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <h3 className="h4">All</h3>
        <div className="row gyms mb-5 pb-5">
          <div className="col-md-3 mb-3">
            <div className="gym light-boxshadow position-relative">
              <div className="gym-img text-center">
                <img src={img} alt="" className="w-50" />
              </div>
              <div className="gym-info py-3">
                <h2 className="title h3 text-center py-3">Top One Gym</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="gym light-boxshadow position-relative">
              <div className="gym-img text-center">
                <img src={img2} alt="" className="w-50" />
              </div>
              <div className="gym-info py-3">
                <h2 className="title h3 text-center py-3">SALT</h2>
              </div>
              <span className="deal">Hot Deal</span>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="gym light-boxshadow position-relative">
              <div className="gym-img text-center">
                <img src={img3} alt="" className="w-50" />
              </div>
              <div className="gym-info py-3">
                <h2 className="title h3 text-center py-3">ALGYM</h2>
              </div>
              <span className="deal">Hot Deal</span>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination mb-0 w-100 justify-content-center">
            <li className="page-item">
              <Link className="page-link" href="#">
                Previous
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
