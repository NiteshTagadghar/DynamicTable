import React, { useState, useEffect } from "react";

function Header({ data, setFilteredData }) {
  const [onRisk, setOnRisk] = useState(0);
  const [onTrack, setOnTrack] = useState(0);
  const [onHold, setOnHold] = useState(0);
  const [potentialRisk, setPotentialRisk] = useState(0);
  const [archived, setArchived] = useState(0);

  const allStatus = {
    On_Track: "On Track",
    On_Hold: "On Hold",
    At_Risk: "At Risk",
    Archived: "Archived",
    Potential_Risk: "Potential Risk",
  };

  const getAllCounts = () => {
    let tempArchiveCount = 0;
    let tempOnHoldCount = 0;
    let tempRiskCount = 0;
    let tempPotentialRiskCount = 0;
    let tempOnTrackCount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].status === allStatus.Archived) {
        tempArchiveCount = tempArchiveCount + 1;
        setArchived(tempArchiveCount);
      }
      if (data[i].status === allStatus.On_Hold) {
        tempOnHoldCount = tempOnHoldCount + 1;
        setOnHold(tempOnHoldCount);
      }
      if (data[i].status === allStatus.At_Risk) {
        tempRiskCount = tempRiskCount + 1;
        setOnRisk(tempRiskCount);
      }
      if (data[i].status === allStatus.Potential_Risk) {
        tempPotentialRiskCount = tempPotentialRiskCount + 1;
        setPotentialRisk(tempPotentialRiskCount);
      }
      if (data[i].status === allStatus.On_Track) {
        tempOnTrackCount = tempOnTrackCount + 1;
        setOnTrack(tempOnTrackCount);
      }
    }
  };

  const filterData = (searchText) => {
    const filterDataBySearch = data.filter((item) =>
      item.projectName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filterDataBySearch);
  };

  useEffect(() => {
    getAllCounts();
  }, [data]);
  return (
    <div>
      <div className="d-flex m-2 justify-content-between">
        <div>
          <div className="d-flex">
            <div>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => filterData(e.target.value)}
              />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            New Project
          </button>
        </div>
      </div>

      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  All <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Risk <span className="font-weight-bold">{onRisk}</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  On hold <span className="font-weight-bold">{onHold}</span>
                </a>
              </li>
              <li class="nav-item">
                <a a class="nav-link" href="#">
                  Potential risk{" "}
                  <span className="font-weight-bold">{potentialRisk}</span>
                </a>
              </li>
              <li class="nav-item">
                <a a class="nav-link" href="#">
                  On Track <span className="font-weight-bold">{onTrack}</span>
                </a>
              </li>
              <li class="nav-item">
                <a a class="nav-link" href="#">
                  Archived <span className="font-weight-bold">{archived}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
