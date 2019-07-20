package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "card")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Date data;

    @Column
    private String numeroEstabelecimento;

    @Column
    private String tipoCard;

    @Column
    private Date periodoInicial;

    @Column
    private Date periodoFinal;

    @Column
    private String tipoRegistro;

    @Column
    private String sequencial;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getNumeroEstabelecimento() {
        return numeroEstabelecimento;
    }

    public void setNumeroEstabelecimento(String numeroEstabelecimento) {
        this.numeroEstabelecimento = numeroEstabelecimento;
    }

    public String getTipoCard() {
        return tipoCard;
    }

    public void setTipoCard(String tipoCard) {
        this.tipoCard = tipoCard;
    }

    public Date getPeriodoInicial() {
        return periodoInicial;
    }

    public void setPeriodoInicial(Date periodoInicial) {
        this.periodoInicial = periodoInicial;
    }

    public Date getPeriodoFinal() {
        return periodoFinal;
    }

    public void setPeriodoFinal(Date periodoFinal) {
        this.periodoFinal = periodoFinal;
    }

    public String getTipoRegistro() {
        return tipoRegistro;
    }

    public void setTipoRegistro(String tipoRegistro) {
        this.tipoRegistro = tipoRegistro;
    }

    public String getSequencial() {
        return sequencial;
    }

    public void setSequencial(String sequencial) {
        this.sequencial = sequencial;
    }
}
