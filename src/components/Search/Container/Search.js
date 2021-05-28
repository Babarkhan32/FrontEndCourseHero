import React, { useEffect, useState } from "react";
import getSearchedCourses from "../api/getSearchedCourses";
import SearchUi from "../Ui/SearchUi";
import getCourses from "./../api/getCourses";
import getNavSearch from "./../api/getNavSearch";

const Search = (props) => {
  const [data, setData] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
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
  // const [language,setLanguage]=useState('');
  // const [country,setCountry]=useState('');
  // const [subject,setSubject]=useState('');
  // const [cost,setCost]=useState('');
  // const [duration,setDuration]=useState('');
  // const [university,setUniversity]=useState('');

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
    // language:language,
    // country:country,
    // subject:subject,
    // cost:cost,
    // duration:duration,
    // university:university
  };

  const onSetOnline = (value) => {
    console.log(value);

    if (value.checked === true) {
      query.online = "Online";
      setOnline("Online");
    } else {
      query.online = "";
      setOnline("");
    }
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetCertificateCredit = (value) => {
    if (value.checked === true) {
      query.certificateCredit = "Certificate/Credit";
      setCertificateCredit("Certificate/Credit");
    } else {
      query.certificateCredit = "";
      setCertificateCredit("");
    }
    console.log(query);
    getSearchedCourses(query).then((result) => {
      if (result) {
        console.log(result.data);
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };

  const onSetCertificate = (value) => {
    console.log(query);
    if (value.checked === true) {
      query.certificate = "Certificate";
      setCertificate("Certificate");
    } else {
      query.certificate = "";
      setCertificate("");
    }
    getSearchedCourses(query).then((result) => {
      console.log(result.data);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetNonCertificate = (value) => {
    if (value.checked === true) {
      query.nonCertificate = "Non-Certificate";
      setNonCertificate("Non-Certificate");
    } else {
      query.nonCertificate = "";
      setNonCertificate("");
    }
    getSearchedCourses(query).then((result) => {
      console.log(result);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetAssociate = (value) => {
    if (value.checked === true) {
      query.associate = "Associate";
      setAssociate("Associate");
    } else {
      query.associate = "";
      setAssociate("");
    }
    getSearchedCourses(query).then((result) => {
      console.log(query);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetBachelors = (value) => {
    if (value.checked === true) {
      query.bachelor = "Bachelor";
      setBachelor("Bachelor");
    } else {
      query.bachelor = "";
      setBachelor("");
    }
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetMaster = (value) => {
    if (value.checked === true) {
      query.master = "Master";
      setMaster("Master");
    } else {
      query.master = "";
      setMaster("");
    }
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetPhd = (value) => {
    if (value.checked === true) {
      query.phd = "PHD";
      setPhd("PHD");
    } else {
      query.phd = "";
      setPhd("");
    }
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetPostDoc = (value) => {
    if (value.checked === true) {
      query.postDoc = "PostDoc";
      setPostDoc("PostDoc");
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
    if (value.checked === true) {
      query.offline = "Offline";
      setOffline("Offline");
    } else {
      query.offline = "";
      setOffline("");
    }
    getSearchedCourses(query).then((result) => {
      console.log(result.data);
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetLanguage = (value) => {
    query.language = value;
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetCountry = (value) => {
    query.country = value;
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
    });
  };
  const onSetCost = (value) => {
    query.cost = value;
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetSubject = (value) => {
    query.subject = value;
    getSearchedCourses(query).then((result) => {
      if (result) {
        setData(result.data);
      }
      setFirstLoad(false);
    });
  };
  const onSetDuration = (value) => {
    query.duration = value;
    getSearchedCourses(query).then((result) => {
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
      data={data}
    />
  );
};
export default Search;
