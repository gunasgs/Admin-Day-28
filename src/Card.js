import React from "react";

function Card(props) {
  return (
    <>
      <div class="col-xl-3 col-md-6 mb-4">
        <div class={`card ${props.data.border} shadow h-100 py-2`}>
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class={`text-xs font-weight-bold ${props.data.text}  text-uppercase mb-1`}
                >
                  {props.data.name}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {props.data.price}
                </div>
              </div>
              {props.data.bar ? (
                <div class="col mt-3  mr-5">
                  <div class="progress progress-sm">
                    <div
                      class="progress-bar  bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ) : null}

              <div class="col-auto">
                <i class={`${props.data.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
