import "./Rental.css";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import Actions from "./Actions/Actions";
import Categories from "./Categories/Categories";
import Items from "./Items/Items";
import Pagination from "./Pagination";

const Rental = ({ fetchBikes, items, statePage, loading }) => {
  // states for view
  const [dropDownFilter, setDropDownFilter] = useState(false);
  const [view, setView] = useState(1);

  // 
  const [bikes, setBikes] = useState([]);
  const [page, setPage] = useState(statePage);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    let query = `page=${page}&limit=${limit}`;
    fetchBikes(query);
    console.log(items);
  }, [page, limit]);

  return (
    <div className="body-rental">
      <div className="container-rental">
        {/* intro, heading and button - button for new item */}
        <div className="intro">
          <h1>Items</h1>
          <div className="btn-newitem">
            <AiOutlinePlus className="plus-icon" />
            <span>New Item</span>
          </div>
        </div>

        {/* actions (sort, search, view of items, filter) */}
        <Actions view={view} setView={setView} />

        {/* container "data" - categories and items */}
        <div className="data">
          {/*Categories */}
          <Categories />
          {/*Categories */}

          {/*Loading or List of items */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Items
              bikes={items}
              view={view}
              dropDownFilter={dropDownFilter}
              setDropDownFilter={setDropDownFilter}
              setLimit={setLimit}
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
