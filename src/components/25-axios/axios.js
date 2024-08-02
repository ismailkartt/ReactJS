import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";

const Axios = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // API isteği yapmak için Axios'u kullanıyoruz
      axios
        .get("https://restcountries.com/v2/all")
        .then((response) => {
          // API'den dönen veriyi state'e set ediyoruz
          setCountries(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false); // API isteği tamamlandığında loading state'ini false yapıyoruz
        });
    }, 3000);
  }, []); // Boş bağımlılık dizisi, bu useEffect'in sadece ilk render'da çalışmasını sağlar

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      {loading ? ( // Loading state'i true ise Spinner'ı göster
        <Spinner animation="border" variant="primary" />
      ) : ( // Loading state'i false olduğunda tabloyu göster
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Bayrak</th>
              <th>Ülke</th>
              <th>Nüfus</th>
              <th>Başkent</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((item, index) => (
              <tr key={item.alpha3Code}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.flag}
                    alt={`Flag of ${item.name}`}
                    style={{ width: "50px", height: "auto" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.population.toLocaleString()}</td>
                <td>{item.capital}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Axios;
