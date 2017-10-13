package cz.marek_b.team.stats.backend.data;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "goals")
@NamedQuery(name = Goal.QUERY_FIND_BY_PLAYER, query = "SELECT COUNT(g.id) FROM Goal g WHERE g.player.id = ?1")
public class Goal implements Serializable {
    private static final long serialVersionUID = 939821535470698929L;

    public static final String QUERY_FIND_BY_PLAYER = "Goal.findByPlayer";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @ManyToOne
    @JoinColumn(name = "match_id")
    private Match match;
    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;
    @OneToMany(mappedBy = "goal")
    private List<Assist> assists;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public List<Assist> getAssists() {
        return assists;
    }

    public void setAssists(List<Assist> assists) {
        this.assists = assists;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 31 * hash + (int) (this.id ^ (this.id >>> 32));
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
        final Goal other = (Goal) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Goal{" + "id=" + id + ", match=" + match + ", player=" + player + '}';
    }

}
