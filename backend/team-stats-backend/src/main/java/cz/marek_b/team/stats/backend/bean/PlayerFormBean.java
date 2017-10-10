package cz.marek_b.team.stats.backend.bean;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.ws.rs.FormParam;

public class PlayerFormBean {

    @NotNull
    @FormParam("name")
    private String name;
    @Min(value = 1)
    @Max(value = 99)
    @FormParam("number")
    private int number;
    @FormParam("photo")
    private byte[] photo;

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

}
