package cz.marek_b.team.stats.backend.data;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "stats")
@NamedQueries({
    @NamedQuery(name = Statistic.QUERY_FIND_BY_MATCH_ID, query = "SELECT s FROM Statistic s WHERE s.match.id=?1")
})
public class Statistic implements Serializable {

    private static final long serialVersionUID = 8573695902054109952L;

    public static final String QUERY_FIND_BY_MATCH_ID = "Statistic.findByMatchId";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Enumerated(EnumType.STRING)
    private StatisticType type;
    @ManyToOne
    @JoinColumn(name = "match_id", nullable = false)
    private Match match;
    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;
    @ManyToOne
    @JoinColumn(name = "reference_id")
    private Statistic reference;
    // TODO time?

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public StatisticType getType() {
        return type;
    }

    public void setType(StatisticType type) {
        this.type = type;
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

    public Statistic getReference() {
        return reference;
    }

    public void setReference(Statistic reference) {
        this.reference = reference;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 89 * hash + (int) (this.id ^ (this.id >>> 32));
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
        final Statistic other = (Statistic) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Statistic{" + "id=" + id + ", type=" + type + ", match=" + match + ", player=" + player + ", reference=" + reference + '}';
    }

}
