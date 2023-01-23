import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <MyInput
          value={filter.query}
          onChange={(e) =>
            setFilter({ ...filter, query: e.target.value.toLowerCase() })
          }
          placeholder="Search..."
        />
      </div>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
    </div>
  );
}
