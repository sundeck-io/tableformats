import { Line } from "@ant-design/plots";

const data= [
  {
    "Contributor": 1,
    "Category": "Iceberg",
    "Iceberg": 33.62
  },
  {
    "Contributor": 2,
    "Category": "Iceberg",
    "Iceberg": 54.47
  },
  {
    "Contributor": 3,
    "Category": "Iceberg",
    "Iceberg": 64.66
  },
  {
    "Contributor": 4,
    "Category": "Iceberg",
    "Iceberg": 68.27
  },
  {
    "Contributor": 5,
    "Category": "Iceberg",
    "Iceberg": 71.58
  },
  {
    "Contributor": 6,
    "Category": "Iceberg",
    "Iceberg": 74.04
  },
  {
    "Contributor": 7,
    "Category": "Iceberg",
    "Iceberg": 75.98
  },
  {
    "Contributor": 8,
    "Category": "Iceberg",
    "Iceberg": 77.71
  },
  {
    "Contributor": 9,
    "Category": "Iceberg",
    "Iceberg": 79.43
  },
  {
    "Contributor": 10,
    "Category": "Iceberg",
    "Iceberg": 80.91
  },
  {
    "Contributor": 11,
    "Category": "Iceberg",
    "Iceberg": 81.92
  },
  {
    "Contributor": 12,
    "Category": "Iceberg",
    "Iceberg": 82.91
  },
  {
    "Contributor": 13,
    "Category": "Iceberg",
    "Iceberg": 83.78
  },
  {
    "Contributor": 14,
    "Category": "Iceberg",
    "Iceberg": 84.57
  },
  {
    "Contributor": 15,
    "Category": "Iceberg",
    "Iceberg": 85.31
  },
  {
    "Contributor": 16,
    "Category": "Iceberg",
    "Iceberg": 85.99
  },
  {
    "Contributor": 17,
    "Category": "Iceberg",
    "Iceberg": 86.65
  },
  {
    "Contributor": 18,
    "Category": "Iceberg",
    "Iceberg": 87.31
  },
  {
    "Contributor": 19,
    "Category": "Iceberg",
    "Iceberg": 87.96
  },
  {
    "Contributor": 20,
    "Category": "Iceberg",
    "Iceberg": 88.55
  },
  {
    "Contributor": 21,
    "Category": "Iceberg",
    "Iceberg": 89.07
  },
  {
    "Contributor": 22,
    "Category": "Iceberg",
    "Iceberg": 89.57
  },
  {
    "Contributor": 23,
    "Category": "Iceberg",
    "Iceberg": 90.02
  },
  {
    "Contributor": 24,
    "Category": "Iceberg",
    "Iceberg": 90.41
  },
  {
    "Contributor": 25,
    "Category": "Iceberg",
    "Iceberg": 90.79
  },
  {
    "Contributor": 26,
    "Category": "Iceberg",
    "Iceberg": 91.16
  },
  {
    "Contributor": 27,
    "Category": "Iceberg",
    "Iceberg": 91.51
  },
  {
    "Contributor": 28,
    "Category": "Iceberg",
    "Iceberg": 91.85
  },
  {
    "Contributor": 29,
    "Category": "Iceberg",
    "Iceberg": 92.18
  },
  {
    "Contributor": 30,
    "Category": "Iceberg",
    "Iceberg": 92.50
  },
  {
    "Contributor": 31,
    "Category": "Iceberg",
    "Iceberg": 92.79
  },
  {
    "Contributor": 32,
    "Category": "Iceberg",
    "Iceberg": 93.07
  },
  {
    "Contributor": 33,
    "Category": "Iceberg",
    "Iceberg": 93.34
  },
  {
    "Contributor": 34,
    "Category": "Iceberg",
    "Iceberg": 93.60
  },
  {
    "Contributor": 35,
    "Category": "Iceberg",
    "Iceberg": 93.85
  },
  {
    "Contributor": 36,
    "Category": "Iceberg",
    "Iceberg": 94.09
  },
  {
    "Contributor": 37,
    "Category": "Iceberg",
    "Iceberg": 94.31
  },
  {
    "Contributor": 38,
    "Category": "Iceberg",
    "Iceberg": 94.52
  },
  {
    "Contributor": 39,
    "Category": "Iceberg",
    "Iceberg": 94.73
  },
  {
    "Contributor": 40,
    "Category": "Iceberg",
    "Iceberg": 94.93
  },
  {
    "Contributor": 41,
    "Category": "Iceberg",
    "Iceberg": 95.13
  },
  {
    "Contributor": 42,
    "Category": "Iceberg",
    "Iceberg": 95.32
  },
  {
    "Contributor": 43,
    "Category": "Iceberg",
    "Iceberg": 95.50
  },
  {
    "Contributor": 44,
    "Category": "Iceberg",
    "Iceberg": 95.67
  },
  {
    "Contributor": 45,
    "Category": "Iceberg",
    "Iceberg": 95.83
  },
  {
    "Contributor": 46,
    "Category": "Iceberg",
    "Iceberg": 95.99
  },
  {
    "Contributor": 47,
    "Category": "Iceberg",
    "Iceberg": 96.14
  },
  {
    "Contributor": 48,
    "Category": "Iceberg",
    "Iceberg": 96.29
  },
  {
    "Contributor": 49,
    "Category": "Iceberg",
    "Iceberg": 96.42
  },
  {
    "Contributor": 50,
    "Category": "Iceberg",
    "Iceberg": 96.42
  },
  {
    "Contributor": 1,
    "Category": "Deltalake",
    "Iceberg": 8.9
  },
  {
    "Contributor": 2,
    "Category": "Deltalake",
    "Iceberg": 15.8
  },
  {
    "Contributor": 3,
    "Category": "Deltalake",
    "Iceberg": 22.2
  },
  {
    "Contributor": 4,
    "Category": "Deltalake",
    "Iceberg": 28.3
  },
  {
    "Contributor": 5,
    "Category": "Deltalake",
    "Iceberg": 33.7
  },
  {
    "Contributor": 6,
    "Category": "Deltalake",
    "Iceberg": 38.7
  },
  {
    "Contributor": 7,
    "Category": "Deltalake",
    "Iceberg": 43.4
  },
  {
    "Contributor": 8,
    "Category": "Deltalake",
    "Iceberg": 47.8
  },
  {
    "Contributor": 9,
    "Category": "Deltalake",
    "Iceberg": 51.9
  },
  {
    "Contributor": 10,
    "Category": "Deltalake",
    "Iceberg": 55.3
  },
  {
    "Contributor": 11,
    "Category": "Deltalake",
    "Iceberg": 57.6
  },
  {
    "Contributor": 12,
    "Category": "Deltalake",
    "Iceberg": 59.7
  },
  {
    "Contributor": 13,
    "Category": "Deltalake",
    "Iceberg": 61.5
  },
  {
    "Contributor": 14,
    "Category": "Deltalake",
    "Iceberg": 63.4
  },
  {
    "Contributor": 15,
    "Category": "Deltalake",
    "Iceberg": 65.1
  },
  {
    "Contributor": 16,
    "Category": "Deltalake",
    "Iceberg": 66.6
  },
  {
    "Contributor": 17,
    "Category": "Deltalake",
    "Iceberg": 68.0
  },
  {
    "Contributor": 18,
    "Category": "Deltalake",
    "Iceberg": 69.3
  },
  {
    "Contributor": 19,
    "Category": "Deltalake",
    "Iceberg": 70.6
  },
  {
    "Contributor": 20,
    "Category": "Deltalake",
    "Iceberg": 71.9
  },
  {
    "Contributor": 21,
    "Category": "Deltalake",
    "Iceberg": 73.2
  },
  {
    "Contributor": 22,
    "Category": "Deltalake",
    "Iceberg": 74.4
  },
  {
    "Contributor": 23,
    "Category": "Deltalake",
    "Iceberg": 75.5
  },
  {
    "Contributor": 24,
    "Category": "Deltalake",
    "Iceberg": 76.6
  },
  {
    "Contributor": 25,
    "Category": "Deltalake",
    "Iceberg": 77.7
  },
  {
    "Contributor": 26,
    "Category": "Deltalake",
    "Iceberg": 78.8
  },
  {
    "Contributor": 27,
    "Category": "Deltalake",
    "Iceberg": 79.8
  },
  {
    "Contributor": 28,
    "Category": "Deltalake",
    "Iceberg": 80.8
  },
  {
    "Contributor": 29,
    "Category": "Deltalake",
    "Iceberg": 81.8
  },
  {
    "Contributor": 30,
    "Category": "Deltalake",
    "Iceberg": 82.7
  },
  {
    "Contributor": 31,
    "Category": "Deltalake",
    "Iceberg": 83.7
  },
  {
    "Contributor": 32,
    "Category": "Deltalake",
    "Iceberg": 84.5
  },
  {
    "Contributor": 33,
    "Category": "Deltalake",
    "Iceberg": 85.3
  },
  {
    "Contributor": 34,
    "Category": "Deltalake",
    "Iceberg": 86.1
  },
  {
    "Contributor": 35,
    "Category": "Deltalake",
    "Iceberg": 86.8
  },
  {
    "Contributor": 36,
    "Category": "Deltalake",
    "Iceberg": 87.4
  },
  {
    "Contributor": 37,
    "Category": "Deltalake",
    "Iceberg": 88.0
  },
  {
    "Contributor": 38,
    "Category": "Deltalake",
    "Iceberg": 88.5
  },
  {
    "Contributor": 39,
    "Category": "Deltalake",
    "Iceberg": 89.0
  },
  {
    "Contributor": 40,
    "Category": "Deltalake",
    "Iceberg": 89.5
  },
  {
    "Contributor": 41,
    "Category": "Deltalake",
    "Iceberg": 90.0
  },
  {
    "Contributor": 42,
    "Category": "Deltalake",
    "Iceberg": 90.5
  },
  {
    "Contributor": 43,
    "Category": "Deltalake",
    "Iceberg": 90.9
  },
  {
    "Contributor": 44,
    "Category": "Deltalake",
    "Iceberg": 91.4
  },
  {
    "Contributor": 45,
    "Category": "Deltalake",
    "Iceberg": 91.8
  },
  {
    "Contributor": 46,
    "Category": "Deltalake",
    "Iceberg": 92.2
  },
  {
    "Contributor": 47,
    "Category": "Deltalake",
    "Iceberg": 92.5
  },
  {
    "Contributor": 48,
    "Category": "Deltalake",
    "Iceberg": 92.8
  },
  {
    "Contributor": 49,
    "Category": "Deltalake",
    "Iceberg": 93.2
  },
  {
    "Contributor": 50,
    "Category": "Deltalake",
    "Iceberg": 93.5
  },
  {
    "Contributor": 1,
    "Category": "Hudi",
    "Iceberg": 10.0
  },
  {
    "Contributor": 2,
    "Category": "Hudi",
    "Iceberg": 17.6
  },
  {
    "Contributor": 3,
    "Category": "Hudi",
    "Iceberg": 22.7
  },
  {
    "Contributor": 4,
    "Category": "Hudi",
    "Iceberg": 27.4
  },
  {
    "Contributor": 5,
    "Category": "Hudi",
    "Iceberg": 31.4
  },
  {
    "Contributor": 6,
    "Category": "Hudi",
    "Iceberg": 35.4
  },
  {
    "Contributor": 7,
    "Category": "Hudi",
    "Iceberg": 39.1
  },
  {
    "Contributor": 8,
    "Category": "Hudi",
    "Iceberg": 42.5
  },
  {
    "Contributor": 9,
    "Category": "Hudi",
    "Iceberg": 45.8
  },
  {
    "Contributor": 10,
    "Category": "Hudi",
    "Iceberg": 49.0
  },
  {
    "Contributor": 11,
    "Category": "Hudi",
    "Iceberg": 52.1
  },
  {
    "Contributor": 12,
    "Category": "Hudi",
    "Iceberg": 55.1
  },
  {
    "Contributor": 13,
    "Category": "Hudi",
    "Iceberg": 57.8
  },
  {
    "Contributor": 14,
    "Category": "Hudi",
    "Iceberg": 60.3
  },
  {
    "Contributor": 15,
    "Category": "Hudi",
    "Iceberg": 62.4
  },
  {
    "Contributor": 16,
    "Category": "Hudi",
    "Iceberg": 64.5
  },
  {
    "Contributor": 17,
    "Category": "Hudi",
    "Iceberg": 66.3
  },
  {
    "Contributor": 18,
    "Category": "Hudi",
    "Iceberg": 68.1
  },
  {
    "Contributor": 19,
    "Category": "Hudi",
    "Iceberg": 69.8
  },
  {
    "Contributor": 20,
    "Category": "Hudi",
    "Iceberg": 71.3
  },
  {
    "Contributor": 21,
    "Category": "Hudi",
    "Iceberg": 72.8
  },
  {
    "Contributor": 22,
    "Category": "Hudi",
    "Iceberg": 74.3
  },
  {
    "Contributor": 23,
    "Category": "Hudi",
    "Iceberg": 75.7
  },
  {
    "Contributor": 24,
    "Category": "Hudi",
    "Iceberg": 77.1
  },
  {
    "Contributor": 25,
    "Category": "Hudi",
    "Iceberg": 78.3
  },
  {
    "Contributor": 26,
    "Category": "Hudi",
    "Iceberg": 79.4
  },
  {
    "Contributor": 27,
    "Category": "Hudi",
    "Iceberg": 80.4
  },
  {
    "Contributor": 28,
    "Category": "Hudi",
    "Iceberg": 81.4
  },
  {
    "Contributor": 29,
    "Category": "Hudi",
    "Iceberg": 82.3
  },
  {
    "Contributor": 30,
    "Category": "Hudi",
    "Iceberg": 83.2
  },
  {
    "Contributor": 31,
    "Category": "Hudi",
    "Iceberg": 84.0
  },
  {
    "Contributor": 32,
    "Category": "Hudi",
    "Iceberg": 84.7
  },
  {
    "Contributor": 33,
    "Category": "Hudi",
    "Iceberg": 85.4
  },
  {
    "Contributor": 34,
    "Category": "Hudi",
    "Iceberg": 86.1
  },
  {
    "Contributor": 35,
    "Category": "Hudi",
    "Iceberg": 86.8
  },
  {
    "Contributor": 36,
    "Category": "Hudi",
    "Iceberg": 87.4
  },
  {
    "Contributor": 37,
    "Category": "Hudi",
    "Iceberg": 88.0
  },
  {
    "Contributor": 38,
    "Category": "Hudi",
    "Iceberg": 88.5
  },
  {
    "Contributor": 39,
    "Category": "Hudi",
    "Iceberg": 89.0
  },
  {
    "Contributor": 40,
    "Category": "Hudi",
    "Iceberg": 89.5
  },
  {
    "Contributor": 41,
    "Category": "Hudi",
    "Iceberg": 89.9
  },
  {
    "Contributor": 42,
    "Category": "Hudi",
    "Iceberg": 90.3
  },
  {
    "Contributor": 43,
    "Category": "Hudi",
    "Iceberg": 90.7
  },
  {
    "Contributor": 44,
    "Category": "Hudi",
    "Iceberg": 91.1
  },
  {
    "Contributor": 45,
    "Category": "Hudi",
    "Iceberg": 91.4
  },
  {
    "Contributor": 46,
    "Category": "Hudi",
    "Iceberg": 91.8
  },
  {
    "Contributor": 47,
    "Category": "Hudi",
    "Iceberg": 92.0
  },
  {
    "Contributor": 48,
    "Category": "Hudi",
    "Iceberg": 92.3
  },
  {
    "Contributor": 49,
    "Category": "Hudi",
    "Iceberg": 92.6
  },
  {
    "Contributor": 50,
    "Category": "Hudi",
    "Iceberg": 92.8
  }
 ];

 const config = {
  data,
  xField: 'Contributor',
  yField: 'Iceberg',
  seriesField: 'Category',
  xAxis: {
    type: 'time',
  },
  color: ['#1CA9E6', '#FACC14', '#EA7E53', '#73D13D'],
  yAxis: {
    label: {
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
};

const Contribution = () => {
  return (
    <Line {...config} />
  )
}

export default Contribution;