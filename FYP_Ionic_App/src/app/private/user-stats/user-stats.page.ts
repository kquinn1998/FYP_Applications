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

  private workoutSub: Subscription;

  workouts: RecordedWorkout[] = [ ];

  isLoading = false;

  chartData: ChartDataSets[] = [{data: [], label: 'Workout Total Weight'}];

  chartLabels: Label[];

  chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            day: 'MMM YY'
          }
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

  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#4287f5'
    }
  ];

  chartType = 'line';
  showLegend = false;

  workoutsText = '';

  constructor(private workoutServ: WorkoutService) { }

  ngOnInit() {
    this.isLoading=true;
    this.workoutSub = this.workoutServ.recordedWorkouts.subscribe(recordedWorkouts => {
      this.workouts = recordedWorkouts;
      this.isLoading=false;
      this.setData();
    });
  }

  ionViewWillEnter() {
    this.isLoading=true;
    this.workoutServ.fetchRecordedWorkouts().subscribe(() => {
      this.isLoading=false;
    });
  }

  setData() {

    this.chartData[0].data = [];
    this.chartLabels = [];

    for(let entry of this.workouts){
      //let date: Date = new Date(entry.date);
      //this.chartLabels.push(date.getDate().toString() + ', ' + date.getMonth().toString() + '\n' + entry.title.toString());
      this.chartLabels.push(entry.date.toString());
      let totalWeight = 0;
      for(let weight of entry.weights){
        totalWeight = totalWeight + Number(weight);
      }
      console.log(totalWeight);
      this.chartData[0].data.push(totalWeight);
    }
  }

}
