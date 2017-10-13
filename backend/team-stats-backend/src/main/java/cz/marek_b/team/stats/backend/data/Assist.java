package cz.marek_b.team.stats.backend.data;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "assists")
@NamedQuery(name = Assist.QUERY_FIND_BY_PLAYER, query = "SELECT COUNT(a.id) FROM Assist a WHERE a.player.id = ?1")
public class Assist implements Serializable {
    private static final long serialVersionUID = 4826066189446159832L;

    public static final String QUERY_FIND_BY_PLAYER = "Assist.findByPlayer";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @ManyToOne
    @JoinColumn(name = "goal_id", nullable = false)
    private Goal goal;
    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Goal getGoal() {
        return goal;
    }

    public void setGoal(Goal goal) {
        this.goal = goal;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 29 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Assist other = (Assist) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Assist{" + "id=" + id + ", goal=" + goal + ", player=" + player + '}';
    }

}
