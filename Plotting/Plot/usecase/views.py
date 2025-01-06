from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ChartDataAPIView(APIView):
    def get(self, request, format=None):
        try:
            # Example data for Line Chart
            line_data = {
                'labels': ['January', 'February', 'March', 'April', 'May', 'June'],
                'datasets': [
                    {
                        'label': 'Dataset 1',
                        'data': [65, 59, 80, 81, 56, 55],
                        'borderColor': 'rgba(75,192,192,1)',
                        'backgroundColor': 'rgba(75,192,192,0.2)',
                    },
                ],
            }

            # Example data for Bar Chart
            bar_data = {
                'labels': ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                'datasets': [
                    {
                        'label': '# of Votes',
                        'data': [12, 19, 3, 5, 2, 3],
                        'backgroundColor': [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        'borderColor': [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        'borderWidth': 1,
                    },
                ],
            }

            # Example data for Radar Chart
            radar_data = {
                'labels': ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Running'],
                'datasets': [
                    {
                        'label': 'Activity',
                        'data': [65, 59, 90, 81, 56, 55],
                        'backgroundColor': 'rgba(179,181,198,0.2)',
                        'borderColor': 'rgba(179,181,198,1)',
                        'pointBackgroundColor': 'rgba(179,181,198,1)',
                    },
                ],
            }

            # Example data for Pie Chart
            pie_data = {
                'labels': ['Red', 'Blue', 'Yellow'],
                'datasets': [
                    {
                        'data': [10, 20, 30],
                        'backgroundColor': ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                ],
            }

            # Example data for Polar Area Chart
            polar_area_data = {
                'labels': ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                'datasets': [
                    {
                        'data': [11, 16, 7, 3, 14],
                        'backgroundColor': [
                            '#FF6384',
                            '#4BC0C0',
                            '#FFCE56',
                            '#E7E9ED',
                            '#36A2EB',
                        ],
                    },
                ],
            }

            # Return all chart data as a single response
            return Response({
                'line_data': line_data, 
                'bar_data': bar_data, 
                'radar_data': radar_data,
                'pie_data': pie_data,
                'polar_area_data': polar_area_data,
            }, status=status.HTTP_200_OK)

        except Exception as e:
            # In case of an error, return a message with the error details
            return Response({'error': 'Failed to fetch chart data', 'details': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
