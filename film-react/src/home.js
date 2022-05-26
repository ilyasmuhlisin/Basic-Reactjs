import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
// axios untuk mengambil data dari json
import axios from "axios";
import { connect } from "react-redux";
import { Card, Icon, Image, Grid, Header } from "semantic-ui-react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCarausel: [],
      // jika data belum didapatkan akan loading
      Loading: true,
      dataSchedule: [],
    };
  }
  // mengambil data film
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

  // mengambil data schedule
  getDataSchedule = async () => {
    try {
      //   untuk menarik data dari json
      //cross untuk mencegah error dalam limiter
      await axios
        .get(`https://api.tvmaze.com/schedule`, { crossDomain: true })
        .then((res) => {
          console.log(res.data);
          let dataRes = res.data.slice(0, 10);
          this.setState({
            dataSchedule: dataRes,
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
    await this.getDataSchedule();
  };
  render() {
    return (
      <>
        {this.state.Loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            <Header size="large">Top Films</Header>
            <Carousel
              autoPlay
              centerMode
              centerSlidePercentage={40}
              showStatus="false"
            >
              {/* untuk maping getdatacarausel */}
              {this.state.dataCarausel.map((data, key) => {
                return (
                  <div key={key}>
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
            <Header size="large">Films Schedule</Header>
            <Grid columns={4} divided>
              {this.state.dataSchedule.map((data, key) => {
                // karena src terlalu dalam jadi tidak terbaca
                var gambar = { ...data.show.image };
                var rating = { ...data.show.rating };
                if (data.show.image === null) {
                  gambar =
                    "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg";
                } else {
                  gambar = gambar.medium;
                }
                if (rating.average === null) {
                  rating = 0;
                } else {
                  rating = rating.average;
                }
                return (
                  <Grid.Column key={key}>
                    <Card>
                      <Image src={gambar} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>{data.show.name}</Card.Header>
                        <Card.Meta>Eps: {data.name}</Card.Meta>
                        <Card.Meta>Status: {data.show.status}</Card.Meta>
                        <Card.Description>
                          AirTime {data.show.schedule.time}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <h3>
                          <Icon name="star" />
                          {rating}
                        </h3>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}
            </Grid>
          </div>
        )}
      </>
    );
  }
}

// x
const mapDispatchtoProps = (dispatch) => {
  return {
    type: "ACTIVE_ITEM",
    Activeitem: "home",
  };
};

export default connect(null, mapDispatchtoProps)(Home);
