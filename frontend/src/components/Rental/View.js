import "./Rental.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";

import { CircularProgress, LinearProgress } from "@mui/material";

import Actions from "./Actions/Actions";
import Categories from "./Categories/Categories";
import Items from "./Items/Items";
import Pagination from "./Pagination";

const Rental = ({ fetchBikes, getCategory, items, statePage, loading }) => {
  // states for view
  const [dropDownFilter, setDropDownFilter] = useState(false);
  const [view, setView] = useState(1);

  //
  const [bikes, setBikes] = useState([]); // ???
  const [page, setPage] = useState(statePage);
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState({ price: [0, 500], rating: [1, 5] });

  const navigate = useNavigate();

  useEffect(() => {
    let query = `page=${page}&limit=${limit}&category=${category}`;
    if (search) query += `&search=${search}`;
    if (filter.price[0] != 0 || filter.price[1] != 500)
      /// ??????
      query += `&price[gte]=${filter.price[0]}&price[lte]=${filter.price[1]}`;
    if (filter.rating[0] != 1 || filter.rating[1] != 5)
      /// ??????
      query += `&rating[gte]=${filter.rating[0]}&rating[lte]=${filter.rating[1]}`;
    fetchBikes(query);
    navigate("?" + query);
  }, [page, category, limit, search, filter]);

  return (
    <div className="body-rental">
      <div className="container-rental">
        {/* intro, heading and button - button for new item */}
        <div className="intro">
          <h1>Items</h1>
          <Link to="/rental/add">
            <div className="btn-newitem">
              <AiOutlinePlus className="plus-icon" />
              <span>
                {" "}
                <Link to="/rental/add">New Item</Link>
              </span>
            </div>
          </Link>
        </div>

        {/* actions (sort, search, view of items, filter) */}
        <Actions
          view={view}
          setView={setView}
          changePage={setPage}
          changeLimit={setLimit}
          changeSearch={setSearch}
          changeFilter={setFilter}
        />
        {/* container "data" - categories and items */}
        <div className="data">
          {/*Categories */}
          <Categories changeCategory={setCategory} changePage={setPage} />
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
              bikes={items}
              getCategory={getCategory}
              view={view}
              dropDownFilter={dropDownFilter}
              setDropDownFilter={setDropDownFilter}
            />
          )}
          {/*Loading or List of items */}
        </div>
        {/*Pagination */}
        <Pagination page={page} setPage={setPage} limit={limit} />
        {/*Pagination */}
      </div>
    </div>
  );
};

export default Rental;
