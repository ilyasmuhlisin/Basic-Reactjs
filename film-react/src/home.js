import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
// axios untuk mengambil data dari json
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCarausel: [],
      // jika data belum didapatkan akan loading
      Loading: true,
    };
  }
  getDataCarausel = async () => {
    try {
      //   untuk menarik data dari json
      //cross untuk mencegah error dalam limiter
      await axios
        .get(`https://api.tvmaze.com/shows`, { crossDomain: true })
        .then((res) => {
        // menyortir film berdasarkan rating
          let sorted = res.data.sort(function (a, b) {
            return a.rating.average < b.rating.average
              ? 1
              : b.rating.average < a.rating.average
              ? -1
              : 0;
          });
          // memtong data supaya tidak banyak
        //   let dataRes = res.data.slice(0, 10);
        let dataRes = sorted.slice(0, 10);
          this.setState({
            dataCarausel: dataRes,
            Loading: false,
          });
        });
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  };
  //   komponen dijalankan sebelum render supaya dapat menampilkan function
  componentDidMount = async () => {
    await this.getDataCarausel();
  };
  render() {
    return (
      <>
        {this.state.Loading ? (
          <h1>Loading ...</h1>
        ) : (
          <Carousel
            autoPlay
            centerMode
            centerSlidePercentage={40}
            showStatus="false"
          >
            {/* untuk maping getdatacarausel */}
            {this.state.dataCarausel.map((data, key) => {
              return (
                <div>
                  <img
                    style={{ height: "auto", width: "40%" }}
                    alt={data.name}
                    src={data.image.medium}
                  />
                  <p className="legend">{data.name}</p>
                </div>
              );
            })}
          </Carousel>
        )}
      </>
    );
  }
}

export default Home;
