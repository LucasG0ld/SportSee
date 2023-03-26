export class UserMainData {
    constructor(id, firstName, lastName, age, todayScore, calorieCount, proteinCount, carbohydrateCount, lipidCount) {
      this.id = id;
      this.userInfos = { firstName, lastName, age };
      this.todayScore = todayScore;
      this.keyData = { calorieCount, proteinCount, carbohydrateCount, lipidCount };
    }
  }

export class UserPerformance {
    constructor(userId, kind, data) {
      this.userId = userId;
      this.kind = kind;
      this.data = data;
    }
  }
  
  export class UserActivity {
    constructor(userId, sessions, day, kilogram, calories) {
      this.userId = userId;
      this.sessions = sessions;
      this.day = day;
      this.kilogram = kilogram;
      this.calories = calories;
    }
  }
  
  export class UserAverageSessions {
    constructor(userId, sessions) {
      this.userId = userId;
      this.sessions = sessions;
    }
  }
  

  export class PerformanceData {
    constructor(value, kind) {
      this.value = value;
      this.kind = kind;
    }
  }