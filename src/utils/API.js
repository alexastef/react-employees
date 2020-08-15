import axios from "axios";


export default {
    getAll: function() {
      return axios
        .get("https://randomuser.me/api/?results=100&nat=us")
        .then(res => {
          // For this, Brian and I worked out that mapping the data made the arrays inaccessible to render
          // only once I returned the data without mapping it could I render in JSX. The data console logged
          // and the state was set, but I could not pass and render
          
          // const employeeData = res.data.results.map(({ name, location, email, phone, picture }) => {
          //     return {
          //       // photo: picture.thumbnail,
          //       firstName: name.first,
          //       lastName: name.last,
          //       email: email,
          //       // phone: phone,
          //       // city: location.city,
          //       // state: location.state
          //     }
          // });

          return res.data.results;
        });
    }
  };
