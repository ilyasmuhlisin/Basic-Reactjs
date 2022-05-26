import React, { Component } from "react";
import { Grid, Image, Header, Card, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: [],
      // jika data belum didapatkan akan loading
      Loading: true,
    };
  }
  //mengambil data film
  getDataFilm = async () => {
    try {
      //   untuk menarik data dari json
      //cross untuk mencegah error dalam limiter
      await axios
        .get(`https://api.tvmaze.com/search/shows?q=marvel`, {
          crossDomain: true,
        })
        .then((res) => {
          console.log(res.data);
          let dataRes = res.data.slice(0, 10);
          this.setState({
            dataFilm: dataRes,
            Loading: false,
          });
        });
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  };

  componentDidMount = async () => {
    await this.getDataFilm();
  };
  render() {
    return (
      <div>
        <Header size="large">Database Films</Header>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={2}>
              <Image src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg" />
              <Image
                style={{ marginTop: 20 }}
                src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
              />
              <Image
                style={{ marginTop: 20 }}
                src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              {/* card data films */}
              <Grid columns={3} divided>
                {this.state.dataFilm.map((data, key) => {
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
                          <Card.Meta>language: {data.show.language}</Card.Meta>
                          <Card.Description>
                            Description{" "}
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.show.summary,
                              }}
                            ></div>
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
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// x
const mapDispatchtoProps = (dispatch) => {
  return {
    type: "ACTIVE_ITEM",
    Activeitem: "film",
  };
};

export default connect(null, mapDispatchtoProps)(Film);
