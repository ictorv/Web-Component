"use client";
import React, { useEffect, useState } from 'react';
import { BarChart2, LogOut, AlertCircle, TrendingUp, PieChart, Activity, Radio } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Line,
  Bar,
  Pie,
  Doughnut,
  Radar,
  PolarArea
} from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

// Chart Component
const ChartComponent = ({ type, data, options }) => {
  const components = {
    line: Line,
    bar: Bar,
    pie: Pie,
    doughnut: Doughnut,
    radar: Radar,
    polarArea: PolarArea,
  };

  const SelectedChart = components[type];
  return <SelectedChart data={data} options={options} />;
};

// Dashboard Card Component
const DashboardCard = ({ title, children, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-blue-600" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    <p className="mt-4 text-gray-600">Loading your dashboard...</p>
  </div>
);

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/usecase/api/chart-data/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching chart data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchChartData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <AlertCircle className="w-12 h-12 text-red-500" />
        <p className="mt-4 text-red-600">Error loading dashboard: {error}</p>
      </div>
    );
  }

  if (!chartData) {
    return null;
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600">Monitor your key metrics in real-time</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Revenue', value: '$45,678', change: '+12%', icon: TrendingUp },
            { title: 'Active Users', value: '1,234', change: '+8%', icon: Activity },
            { title: 'Conversion Rate', value: '3.2%', change: '+2%', icon: BarChart2 },
            { title: 'Avg. Session', value: '4m 32s', change: '+5%', icon: Radio }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm">{item.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
                  <p className="text-green-500 text-sm mt-1">{item.change} vs last month</p>
                </div>
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Performance Trends" icon={TrendingUp}>
            <div className="h-80">
              <ChartComponent type="line" data={chartData.line_data} options={chartOptions} />
            </div>
          </DashboardCard>

          <DashboardCard title="Revenue Distribution" icon={BarChart2}>
            <div className="h-80">
              <ChartComponent type="bar" data={chartData.bar_data} options={chartOptions} />
            </div>
          </DashboardCard>

          <DashboardCard title="Market Coverage" icon={Activity}>
            <div className="h-80">
              <ChartComponent type="radar" data={chartData.radar_data} options={chartOptions} />
            </div>
          </DashboardCard>

          <DashboardCard title="Revenue Sources" icon={PieChart}>
            <div className="h-80">
              <ChartComponent type="pie" data={chartData.pie_data} options={chartOptions} />
            </div>
          </DashboardCard>

          <DashboardCard title="Resource Allocation" icon={Radio}>
            <div className="h-80">
              <ChartComponent type="polarArea" data={chartData.polar_area_data} options={chartOptions} />
            </div>
          </DashboardCard>

          {/* Additional Insights Card */}
          <DashboardCard title="Key Insights" icon={Activity}>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900">Performance Summary</h3>
                <p className="text-blue-700 mt-1">12% increase in overall performance metrics</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900">Growth Opportunities</h3>
                <p className="text-green-700 mt-1">Emerging trends in market segments</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900">Action Items</h3>
                <p className="text-purple-700 mt-1">Focus areas for next quarter identified</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Your Company Name. All rights reserved.</p>
            <p className="mt-2">Powered by Advanced Analytics</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;