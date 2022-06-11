import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import styles from "./styles.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
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
      position: "top" as const,
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
    <Chart
      className={styles.chart}
      type="line"
      options={options}
      data={{
        labels: data,
        datasets: [
          {
            data: data,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      }}
    />
  );
}

export default Component;
