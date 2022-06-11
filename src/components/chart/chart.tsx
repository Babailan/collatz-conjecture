import { Line } from "react-chartjs-2";
import styles from "./styles.module.scss";
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

type props = {
  data: any;
};

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      text: "Collatz Conjecture",
    },
    tooltip: {
      displayColors: false,
      rtl: false,
    },
  },
};

function Component({ data }: props) {
  return (
    <Line
      className={styles.chart}
      options={options}
      data={{
        labels: data,
        datasets: [
          {
            data: data,
            borderColor: "#051094",
            backgroundColor: "rgba(0, 0, 0)",
          },
        ],
      }}
    />
  );
}

export default Component;
