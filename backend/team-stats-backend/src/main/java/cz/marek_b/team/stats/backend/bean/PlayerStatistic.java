package cz.marek_b.team.stats.backend.bean;

import java.io.Serializable;

public class PlayerStatistic implements Serializable {
    private static final long serialVersionUID = -9213464033318484110L;

    private int goals;
    private int assists;

    public PlayerStatistic(int goals, int assists) {
        this.goals = goals;
        this.assists = assists;
    }

    public int getGoals() {
        return goals;
    }

    public void setGoals(int goals) {
        this.goals = goals;
    }

    public int getAssists() {
        return assists;
    }

    public void setAssists(int assists) {
        this.assists = assists;
    }

    @Override
    public String toString() {
        return "PlayerStatistic{" + "goals=" + goals + ", assists=" + assists + '}';
    }

}
