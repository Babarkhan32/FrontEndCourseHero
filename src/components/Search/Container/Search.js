import React, { useEffect, useState } from "react";
import getSearchedCourses from "../api/getSearchedCourses";
import SearchUi from "../Ui/SearchUi";
import getCourses from "./../api/getCourses";
import getNavSearch from "./../api/getNavSearch";

const Search = (props) => {
  const [data, setData] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [load, setLoad] = useState(false);
  const [online, setOnline] = useState("");
  const [offline, setOffline] = useState("");
  const [certificate, setCertificate] = useState("");
  const [nonCertificate, setNonCertificate] = useState("");
  const [certificateCredit, setCertificateCredit] = useState("");
  const [associate, setAssociate] = useState("");
  const [bachelor, setBachelor] = useState("");
  const [master, setMaster] = useState("");
  const [phd, setPhd] = useState("");
  const [postDoc, setPostDoc] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [city,setCity]=useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [university, setUniversity] = useState("");

  let query = {
    online: online,
    offline: offline,
    certificate: certificate,
    nonCertificate: nonCertificate,
    associate: associate,
    bachelor: bachelor,
    master: master,
    phd: phd,
    postDoc: postDoc,
    certificateCredit: certificateCredit,
    language: language,
    country: country,
    subject: subject,
    cost: cost,
    duration: duration,
    university: university,
    city:city
  };

  const onDefaultClick = () => {
    getCourses().then((result) => {
      console.log(result, "Check result");
      if (result) {
        setData(result.data);
        console.log(result, "Result for era");
        setFirstLoad(false);
      }
    });
  };
  const onSetOnline = (value) => {
    setLoad(true);
    if (value.checked === true) {
      query.online = "Online";
      setOnline("Online");
    } else {
      query.online = "";
      setOnline("");
    }

    getSearchedCourses(query).then((result) => {
      setLoad(false);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };

  const onSetCity=(value)=>{
    setCity(value);
    query.city=value;
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });

  }
  const onSetCertificateCredit = (value) => {
    setLoad(true);
    if (value.checked === true) {
      query.certificateCredit = "Certificate/Credit";
      setCertificateCredit("Certificate/Credit");
    } else {
      query.certificateCredit = "";
      setCertificateCredit("");
    }
    console.log(query);
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        console.log(result.data);
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };

  const onSetCertificate = (value) => {
    setLoad(true);

    if (value.checked === true) {
      query.certificate = "Certificate";
      setCertificate("Certificate");
    } else {
      query.certificate = "";
      setCertificate("");
    }
    getSearchedCourses(query).then((result) => {
      setLoad(false);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetNonCertificate = (value) => {
    setLoad(true);
    if (value.checked === true) {
      query.nonCertificate = "Non Certificate";
      setNonCertificate("Non Certificate");
    } else {
      query.nonCertificate = "";
      setNonCertificate("");
    }
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetAssociate = (value) => {
    setLoad(true);

    if (value.checked === true) {
      query.associate = "Associate";
      setAssociate("Associate");
    } else {
      query.associate = "";
      setAssociate("");
    }
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetBachelors = (value) => {
    setLoad(true);

    if (value.checked === true) {
      query.bachelor = "Bachelor's";
      setBachelor("Bachelor's");
    } else {
      query.bachelor = "";
      setBachelor("");
    }
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetMaster = (value) => {
    setLoad(true);

    if (value.checked === true) {
      query.master = "Master's";
      setMaster("Master's");
    } else {
      query.master = "";
      setMaster("");
    }
    getSearchedCourses(query).then((result) => {
      setLoad(false);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetPhd = (value) => {
    setLoad(true);
    if (value.checked === true) {
      query.phd = "PHD";
      setPhd("PHD");
    } else {
      query.phd = "";
      setPhd("");
    }
    getSearchedCourses(query).then((result) => {
      setLoad(false);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetPostDoc = (value) => {
    setLoad(true);

    if (value.checked === true) {
      query.postDoc = "Post doc";
      setPostDoc("Post doc");
    } else {
      query.postDoc = "";
      setPostDoc("");
    }
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetOffline = (value) => {
    setLoad(true);

    if (value.checked === true) {
      query.offline = "Offline";
      setOffline("Offline");
    } else {
      query.offline = "";
      setOffline("");
    }
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetLanguage = (value) => {
    setLoad(true);
    setLanguage(value);
    query.language = value;
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetCountry = (value) => {
    setLoad(true);
    setCountry(value);
    query.country = value;
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
    });
  };
  const onSetCost = (value) => {
    setLoad(true);
    setCost(value);
    query.cost = value;
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetSubject = (value) => {
    setLoad(true);
    setSubject(value);
    query.subject = value;
    getSearchedCourses(query).then((result) => {
      setLoad(false);

      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetDuration = (value) => {
    setLoad(true);
    setDuration(value);
    query.duration = value;
    getSearchedCourses(query).then((result) => {
      setLoad(false);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
      console.log("Result", result);
    });
  };

  const onSetUniversity = (value) => {
    setLoad(true);
    setUniversity(value);
    query.duration = value;
    getSearchedCourses(query).then((result) => {
      setLoad(false);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
      console.log("Result", result);
    });
  };
  useEffect(() => {
    if (props.location.state === undefined) {
      getCourses().then((result) => {
        console.log(result, "Check result");
        if (result) {
          setData(result.data);
          console.log(result, "Result for era");
          setFirstLoad(false);
        }
      });
    } else {
      getNavSearch(props.location.state.user).then((result) => {
        if (result) {
          console.log(result);
          setData(result.data);
        }
      });
    }
  }, [props.location.state]);

  return (
    <SearchUi
      load={firstLoad}
      loading={load}
      firstLoadHook={setFirstLoad}
      onSetOnline={onSetOnline}
      onSetOffline={onSetOffline}
      onSetSubject={onSetSubject}
      onSetCertificate={onSetCertificate}
      onSetNonCertificate={onSetNonCertificate}
      onSetAssociate={onSetAssociate}
      onSetBachelors={onSetBachelors}
      onSetMaster={onSetMaster}
      onSetPhd={onSetPhd}
      onSetPostDoc={onSetPostDoc}
      onSetCost={onSetCost}
      onSetDuration={onSetDuration}
      onSetCountry={onSetCountry}
      onSetLanguage={onSetLanguage}
      onSetCertificateCredit={onSetCertificateCredit}
      onDefaultClick={onDefaultClick}
      onSetUniversity={onSetUniversity}
      onSetCity={onSetCity}
      data={data}
    />
  );
};
export default Search;
