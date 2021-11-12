import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DateTime } from "luxon";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { useFetchGroup } from "../hooks/fetchGroup";

function GroupDetails() {
  const { id } = useParams();
  const [group, setGroup] = useState();
  const [groupDetail, loading, error] = useFetchGroup(id);

  useEffect(() => {
    setGroup(groupDetail);
  }, [groupDetail]);
  return (
    <div>
      <Link to={"/"}>Back</Link>
      <h1>{group && group.name}</h1>
      <h4>{group && group.description}</h4>

      <h2>Events: </h2>
      <h4>
        {group &&
          group.events.map((event) => {
            const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";
            const evtTime = DateTime.fromFormat(event.time, format);
            return (
              <>
                <h4>
                  {event.team1} VS {event.team2}
                </h4>
                <p>
                  <CalendarTodayIcon />
                  {evtTime.toSQLDate()} <QueryBuilderIcon />
                  {evtTime.toFormat("HH:mm")}
                </p>
              </>
            );
          })}
      </h4>
    </div>
  );
}

export default GroupDetails;
