import "./Rental.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { useScrollTo } from "react-use-window-scroll";

import { Alert, CircularProgress, LinearProgress } from "@mui/material";

import Actions from "./Actions/Actions";
import Categories from "./Categories";
import Items from "./Items/Items";
import Pagination from "./Pagination";
import {FaList} from "react-icons/fa"
import AlertBox from "./AlertBox";
import ModalNewItem from "./ModalNewItem/View";

let categories = ["all", "bike", "scooter", "e-bike","no category"]
let categories2 = ["all", "my items"]

const Rental = ({ cleanAlert, fetchBikes, items, statePage, loading, authorization, alert, providerState }) => {
  const {isAdmin, isUser, isAgency} = authorization;
  // states for view
  const [dropDownFilter, setDropDownFilter] = useState(false);
  const [view, setView] = useState(2);
  const location = useLocation();
  let params = location.search;
  let objectParams = new URLSearchParams(params)
  //
  const [bikes, setBikes] = useState([]); // ???
  const [page, setPage] = useState(params != "" ? objectParams.get("page") : statePage);
  const [limit, setLimit] = useState(params != "" ? objectParams.get("limit") : 8);
  const [category, setCategory] = useState(params != "" ? objectParams.get("category") :"all");
  const [provider, setProvider] = useState(params != "" ? objectParams.get("provider") :"all");
  const [search, setSearch] = useState(params != "" && objectParams.get("search")? objectParams.get("search") : "");;
  const [sort, changeSort] = useState(params != "" ? objectParams.get("sort") :"newest");
  const [statusItems, setStatusItems] = useState(params && objectParams.get("status") != "" ? objectParams.get("status") :"yes");
  const [filter, setFilter] = useState(
    params != "" ? 
    {
      price: [objectParams.get("price[gte]") ? objectParams.get("price[gte]") : 0,
      objectParams.get("price[lte]") ? objectParams.get("price[lte]") : 200], 
      rating: [objectParams.get("rating[gte]") ? objectParams.get("rating[gte]") : 1,
      objectParams.get("rating[lte]") ? objectParams.get("rating[lte]") : 5],
    }
    :{ price: [0, 200], rating: [1, 5] });

  const navigate = useNavigate();

  useEffect(() => {
    let query = `page=${page}&limit=${limit}&category=${category}`;
    if (isAgency || isAdmin){
      query += `&provider=${provider}`
    }
    if (sort) query += `&sort=${sort}`;
    if (search) query += `&search=${search}`;

    if (statusItems) query += `&status=${statusItems}`

    if (filter.price[0] != 0 || filter.price[1] != 200)
      query += `&price[gte]=${filter.price[0]}&price[lte]=${filter.price[1]}`;
    if (filter.rating[0] != 1 || filter.rating[1] != 5)
      query += `&rating[gte]=${filter.rating[0]}&rating[lte]=${filter.rating[1]}`;
    
    fetchBikes(query);
    navigate("?" + query);
  }, [page, category, limit, search, filter, provider, sort, statusItems]);

  /*
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [page])
*/
  const alertHandler = (e) => {
    if(e.target.type === "submit") {
    } else {
      setErrorRent(false)
      cleanAlert()
      setAlertVisible(false)
    }
  }
  
  // disable alert
  useEffect(() => {
    setTimeout(() => {
      setAlertVisible(false)
    }, 3000)
  })

  const [dimensions, setDimensions] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  })

  useEffect(() => {
    if (dimensions < 600 && view != 2) { setView(1); setLimit(30); }
    if (dimensions > 600 && view != 2) { setView(3); setLimit(3); }
  }, [dimensions])

  const [errorRent, setErrorRent] = useState(false)
  const alert1 = {
    type: "error",
    message: "There are no products available"
  }
  const [alertVisible, setAlertVisible] = useState(alert.message)
  return (
    <div className="body-rental">
      <div className="container-rental" onClick={(e) => alertHandler(e)}>
        {errorRent ? <AlertBox alert={alert1}/> : null}
        {alert.message && alertVisible ? <AlertBox alert={alert}/> : null}
        {/* intro, heading and button - button for new item */}
        <div className="intro">
        <h2><FaList className="icon-dash"/>Items</h2>
          {isAdmin || isAgency ? (
            <Link to="/rental/add">
              <div className="btn-newitem">
                <AiOutlinePlus className="plus-icon" />
                <span>
                  <Link to="/rental/add">New Item</Link>
                </span>
              </div>
            </Link>
          ) : null}
        </div>

        {/* actions (sort, search, view of items, filter) */}
        <Actions
          setStatusItems={setStatusItems}
          statusItems={statusItems}
          dimensions={dimensions}
          view={view}
          setView={setView}
          changePage={setPage}
          changeLimit={setLimit}
          search={search}
          changeSearch={setSearch}
          filter={filter}
          changeFilter={setFilter}
          sort={sort}
          changeSort={changeSort}
          isAdmin={isAdmin}
          isAgency={isAgency}
        />
        {/* container "data" - categories and items */}
        <div className="data">
          {/*Categories */}
           <Categories dimensions={dimensions} categories2={categories2} categories={categories} category={category} changeCategory={setCategory}  setProvider={setProvider} changePage={setPage} />
          {/*Categories */}

          {/*Loading or List of items */}
          {loading ? (
            <div className="text-div">
              <CircularProgress />
            </div>
          ) : items && items.length === 0 ? (
            <div className="text-div">
              <p>No Result Found</p>
            </div>
          ) : (
            <Items
              page={page}
              bikes={items}
              view={view}
              dropDownFilter={dropDownFilter}
              setDropDownFilter={setDropDownFilter}
              setErrorRent={setErrorRent}
            />
          )}
          {/*Loading or List of items */}
        </div>
        {/*Pagination */}
        {view === 1 ? null : 
          <Pagination page={page} setPage={setPage} limit={limit} />
        }
        {/*Pagination */}
      </div>
    </div>
  );
};

export default Rental;
