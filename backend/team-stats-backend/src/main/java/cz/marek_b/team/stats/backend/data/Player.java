package cz.marek_b.team.stats.backend.data;

import cz.marek_b.team.stats.backend.bean.PlayerFormBean;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "players", uniqueConstraints = @UniqueConstraint(columnNames={"name", "number"}))
@NamedQuery(name = Player.QUERY_FIND_ALL, query = "SELECT p FROM Player p ORDER BY p.number")
public class Player implements Serializable {
    private static final long serialVersionUID = -2075289962534844939L;

    public static final String QUERY_FIND_ALL = "Player.findAll";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "number", nullable = false)
    private int number;
    @Column(name = "photo")
    @Lob
    private byte[] photo;

    public Player() {}

    public Player(PlayerFormBean playerFormBean) {
        this.name = playerFormBean.getName();
        this.number = playerFormBean.getNumber();
        this.photo = playerFormBean.getPhoto();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 67 * hash + (int) (this.id ^ (this.id >>> 32));
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
        final Player other = (Player) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Player{" + "id=" + id + ", name=" + name + ", number=" + number + ", photo=" + photo + '}';
    }

}
