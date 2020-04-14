import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { WorkoutService } from 'src/app/services/workout.service';
import { Subscription } from 'rxjs';
import { RecordedWorkout } from 'src/app/models/recorded_workout.model';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.page.html',
  styleUrls: ['./user-stats.page.scss'],
})
export class UserStatsPage implements OnInit {

  // Normal Page Variables
  private workoutSub: Subscription;
  workouts: RecordedWorkout[] = [ ];
  isLoading = false;

  // Chart1Variables
  chartData1: ChartDataSets[] = [{data: [], label: 'Total Workout Weight'}];
  chartLabels1: Label[];
  chartOptions1 = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      xAxes: [{
        ticks: {
          display: true,
          autoSkip: true,
          maxRotation: 90,
          minRotation: 90,
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback(value: string) {
                  return value + 'kg';
          }
      },
      }]
    },
    title: {
      display: true,
      text: 'Total Weight'
    },
    elements: {
      line: {
        tension: 0
      }
    }
  };
  chartColors1: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#4287f5'
    }
  ];
  chartType1 = 'line';

  // Chart2 Variables
  chartData2: ChartDataSets[] = [{data: [], label: 'Total Weight'}];
  chartLabels2: Label[];
  chartOptions2 = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90
        }
      }]
    },
    title: {
      display: true,
      text: 'Past Workouts'
    },
    elements: {
      line: {
        tension: 0
      }
    }
  };
  chartColors2: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#4287f5'
    }
  ];
  chartType2 = 'line';

  constructor(private workoutServ: WorkoutService) { }

  ngOnInit() {
    this.isLoading = true;
    this.workoutSub = this.workoutServ.recordedWorkouts.subscribe(recordedWorkouts => {
      this.workouts = recordedWorkouts;
      this.isLoading = false;
      this.setData();
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.workoutServ.fetchRecordedWorkouts().subscribe(() => {
      this.isLoading = false;
    });
  }

  setData() {

    this.chartData1[0].data = [];
    this.chartLabels1 = [];
    let i = 1;

    for(const entry of this.workouts){
      const date: Date = new Date(entry.date);
      this.chartLabels1.push(entry.title + ' ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
      i = i + 1;
      let totalWeight = 0;
      for(const weight of entry.weights){
        totalWeight = totalWeight + Number(weight);
      }
      this.chartData1[0].data.push(totalWeight);
    }

  }

}
