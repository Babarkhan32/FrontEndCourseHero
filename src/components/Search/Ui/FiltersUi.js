import React from "react";
import style from "../Assets/Search.module.css";
import { Card, Checkbox, Select, Input } from "antd";
import countryList from "react-select-country-list";
const { Option } = Select;

const FiltersUi = (props) => {
  const countries = countryList().getLabels();
  const getCurrencyList = require("country-currency-map").getCurrencyList();
  let languages = require("langu-list")();
  const langagesList = languages.getLanguageNames();

  function handleChange(value) {
    props.onSetSubject(value);
  }

  function handleLanguageChange(value) {
    props.onSetLanguage(value);
  }

  function handleCountryChange(value) {
    props.onSetCountry(value);
  }

  return (
    <div>
      <Card
        className={style.FilterCard}
        size="small"
        title="Get Default Courses"
      >
        <Checkbox onChange={(e) => props.onDefaultClick()}> Default </Checkbox>
      </Card>

      <Card className={style.FilterCard} size="small" title="Single Course">
        <Checkbox onChange={(e) => props.onSetCertificate(e.target)}>
          {" "}
          Certificate{" "}
        </Checkbox>
        <br />
        <Checkbox onChange={(e) => props.onSetNonCertificate(e.target)}>
          {" "}
          Non-Certificate
        </Checkbox>
        <br />
        <Checkbox onChange={(e) => props.onSetCertificateCredit(e.target)}>
          {" "}
          Credit
        </Checkbox>
        <br />
        <Checkbox> Non-Credit</Checkbox>
      </Card>

      <Card className={style.FilterCard} size="small" title="Degree">
        <Checkbox onChange={(e) => props.onSetAssociate(e.target)}>
          {" "}
          Associate's{" "}
        </Checkbox>
        <br />
        <Checkbox onChange={(e) => props.onSetBachelors(e.target)}>
          {" "}
          Bachelor's
        </Checkbox>
        <br />
        <Checkbox onChange={(e) => props.onSetMaster(e.target)}>
          Master's
        </Checkbox>
        <br />
        <Checkbox onChange={(e) => props.onSetPhd(e.target)}>PHD</Checkbox>
        <br />
        <Checkbox onChange={(e) => props.onSetPostDoc(e.target)}>
          Post Doc
        </Checkbox>
      </Card>

      <Card className={style.FilterCard} size="small" title="Mode">
        <Checkbox
          onChange={(e) => {
            props.onSetOffline(e.target);
          }}
        >
          {" "}
          Offline
        </Checkbox>
        <br />
        <Checkbox onChange={(e) => props.onSetOnline(e.target)}>
          {" "}
          Online
        </Checkbox>
      </Card>

      <Card className={style.FilterCard} size="small" title="Subject">
        <Select
          showSearch
          placeholder="Select Subject"
          style={{ width: "100%" }}
          onChange={handleChange}
          optionLabelProp="label"
        >
          <Option value="Automata" label="Automata">
            Automata
          </Option>
          <Option value="Data Sciences" label="Data Sciences">
            Data Sciences
          </Option>
          <Option value="Assembly Language" label="Assembly Language">
            Assembly Language
          </Option>
          <Option value="HCI" label="HCI">
            Human Computer Interation
          </Option>
        </Select>
      </Card>

      <Card className={style.FilterCard} size="small" title="Language">
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select Language"
          onChange={handleLanguageChange}
          optionLabelProp="label"
        >
          {langagesList.map((item, i) => (
            <Option key={i} value={item}>
              {" "}
              {item}
            </Option>
          ))}
        </Select>
      </Card>
      <Card
        className={style.FilterCard}
        size="small"
        title="University/Institute"
      >
        <Input type="text" placeholder="Institute" />
      </Card>
      <Card className={style.FilterCard} size="small" title="Country">
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select Country"
          onChange={handleCountryChange}
        >
          {countries.map((item, i) => (
            <Option key={i} value={item}>
              {" "}
              {item}{" "}
            </Option>
          ))}
        </Select>
      </Card>

      <Card className={style.FilterCard} size="small" title="City">
        <Input placeholder="Enter City" />
      </Card>

      <Card className={style.FilterCard} size="small" title="Cost">
        <Checkbox> Free </Checkbox>
        <br />
        <Input
          onChange={(e) => props.onSetCost(e.target.value)}
          placeholder="Cost Upto"
          type="number"
          className="mtt-5"
        />
        <label className="mtt-10"> Curreny Type </label>
        <br />

        <Select
          showSearch
          placeholder="Select Currency"
          style={{ width: "100%" }}
          optionLabelProp="label"
        >
          {getCurrencyList.map((item, i) => (
            <Option key={i} value={item.abbr}>
              {" "}
              {item.abbr}
            </Option>
          ))}
        </Select>
      </Card>
      <Card className={style.FilterCard} size="small" title="Duration">
        <label> Upto (Months) </label>
        <br />
        <Input
          onChange={(e) => props.onSetDuration(e.target.value)}
          placeholder="Months"
          type="number"
        />
      </Card>
    </div>
  );
};
export default FiltersUi;
