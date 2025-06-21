"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonies = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      text: "The stay was absolutely wonderful! The staff were incredibly friendly and attentive, and the room was immaculate with stunning city views. Every detail was perfect - from the luxurious bedding to the complimentary breakfast. Highly recommend this place for anyone looking for a premium experience!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9hSBe5Zkrz0adu31yTLrGcyYS6T9FppiEg&s",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      text: "A perfect getaway! The amenities were absolutely top-notch - the spa, fitness center, and rooftop pool exceeded all expectations. The location was ideal for exploring the city, with easy access to all major attractions. The concierge service was exceptional and helped make our trip unforgettable.",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERUTEhMVFRUVFRUVFhUXFRUVFRUVFRUXFxUVFRUYHSggGB0lHRUVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFhAQGi0dHR0tLS0tLS0rLS0rLS0tLS0tLS0tLSstLS0tLS0rLS0tLS0tLS0tLS0uLS0tLS0tLS0rLf/AABEIANkA6AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYHAAj/xABCEAABAwEFBQUFBgUCBgMAAAABAAIDEQQFEiExBkFRYXETIoGR8CMyobHBB0JS0eHxFDNicrKSwhU0Q2OC4hckU//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgQDBf/EACgRAAICAQQABgIDAQAAAAAAAAABAhEDBBIhMRMiMkFRYUKBM1Kxcf/aAAwDAQACEQMRAD8A2lF4BKlC81RPQbAO1baxnosO1gW52uPsj0WAZIpo6RfBZwBJgTWPSSSUQkVZJhCUNCqCZSNkToLLQAUsUOL3RX5K3ct1GbvEdwfE8FqBdYLKAYcsqK44/disxFohLRWnwKEm8cPvs8tfIrS3nZ3NqDmEAtsVRouqjB8NESjJdMnhc17cTTUetRuXnMQazzdk6o8RucOfNHC8OAc3MEVC5ZMex/Q4T3cPsgICQ0XnFMc5RRdjqpwATA5IHooLJMCb2a8JE18qKYWKYgk7EKB1oonNtIVUxWSdiE0wpDOvCVLkDxiUfZqTGo3yKkI8YlG6IJe1TcaYhhjC8lc5eTQmdtCUBeATmhFHJsCbVt9kei57hC6JtWPYnouah65tcs7Q6LDWpSFE2qa6qVFj6BSRsqQBqTQdSqhV+6InOlYWgnC5rnUBNGhwqTTcnQmdPuaxNijDBoB8VSvS2hj6POECmdaa8kQjecOQqdVmdpZ5cDuzs8Zyzc+QYyTyANPNavo5LjkrW58crSWPxZ0rXes9boaNdyp8Vc2Qs8jnua9mEa46VAog14WkutTonFwYDmWtJJA0oBvS280dN/ltga2REHoiOz1pqHsP3SCPGtfkqt6thBIhe+vB2p6gptxt989K/FXkVwZwi/OjQuc1QuLVA8FQmqxqJossOovBwVapSElVtFZYc8Ku8pAEtEVQFZ0RKcyKisNcE+oVWxUiJjE5zV4lML1IxwCa9qQkqNzigBcITSFGSlzTEI8rya8LyZLO7gJ7QvAJ7QmcQLtU32J6LmbYl07ao0hPRc2aVyl2aMfpGNjIT6BSALwYps6FaSi0uwrGmbPc5hPJoZKT8ggLoKo7smyNsxbKcLJGOYTWgFcxnu0I8VSaBcM3djkYa17uuVNKE1y6rFX/AG8Gfs4QXvPHQDiURbbe4/Aa94hp34anXLLVc8sNunMrwwSVxd4sALi5xoMROg+S1Rhu/Rxc1Dr3Ol2O0QwsEUsgEj2Vpgc3vHOmI5EDRcxvx4FoL2kZZuoc8+C2ds2RvAx4nF5oMWTw6o1zBpy3rn+0F0SwPLpIzHnnibTOvKquONX2KWR7egjb4Q5gJ728EqpcTvaOYAKYcR8DQfMqpYrzLmujduFR4bkS2YgqZH9Gf7j8x5Kclxg7FFxlJNBGVqquGaJyQKq+JY1I70QBeIqpTGm0oqsVDBEm4VLiSVRbAidEkawqziSOcluYUQOaojGrBKaSmmwogDaLxClISYEwKj6LzXKYwVXuxonZNFZ6VSPYvJ2Jo7uGqRrU4NT2hWkZ2AtrGexPRcvYV1jalvsHdFyUArlPs74lwWWlPDlVbVShq5tHYna8KeOUKjhViJiljL0V5iNobkD3qnLME1zOunyQLZC2gWs4qVfX1Ra2DZftrMXuIa5xxRfiIaHNNeDSSBX+lYC1WB8EtaUc0+WedPP4L0sNSh9swZZOMl8I6Ff20k1n7sYe0Ee8x1Gmv9JNB1WE2mviS1nv4nUNaONRXPPU8T5psu1cuENdnSgQa03i55yoK+iFag0EssWijJLSSo6LcbPWctgad7++fHT4UWOgjaZGVFW4gSOOeY9cV03s8hTRZ9ZKkkXpVbbKEpKhCJSR5IfNGVhTNjRG4hROIXnxlMLFYjxcE2q8GJSxOxUeaUjikwpCEBQxxTcSc5pUbmlUIkDkuJQtaU7CgB+NexqMMTxGjgD2ELyUsXkCO6gJ7QmgKRq0IyMFbTD2LuhXKRRdY2m/kO6FckDwVnyLzGnD6SZtE7EFXwkmgBJOgGZJ5BaG7NkJn0dMRC07jnIejd3j5KVBy6LlNR7A2IIzc9xTz0wMLWn77smjmN7vBaawXLZrPQtZjf8AjfRxHMDQeARuCUlwrv8AoV2jp/7MzT1X9UZ+9rX2V6ss2jP4QsYN1Y3M+lVBftxtlaTQVU/2qXc6OezW5gqIZMMhG5kgpXzw+auRWtskeIHdquuR7XaKwpSjycXva5Cx5NNDRDTZsPPqui37EZHUqMuAKzdqu2iuOZsJaZLoD3HYjJOBuaMR5cPj8itPa7ydHTCRlkWkajdQ7lrLm2abY7AZZhSWQdo8HVjad1p6DUcSVztuKZ2OlMRqBwBOSuUVJeYyObjLyujQRW7HprvHrVOc5U7FZi0UREQbsysk9MvxNOPV+0ys8KFzEQksbxnSo4j6qu4LO048M1RkpK0VcKSiklNFXE2aaQx7mJtFI6YKGSZAHnFMJTXSJuOqqhDsYSF4ULyoDKntE2W8YS9oFVqmuKNoWWJJF5VcS8nRNn0IE9qaAntC0GQF7TfyHdCuZ3JcctpkLY8gM3PPutHPieAXTdpf5Lui9dN3CCztiAAcRifxMhFXeWngo2bp/RfibIcdg27bBBZasiHtAO9I6mN39v4RyCjslq7R5BzpXM55qnbrTicJB70TzG/iWO92o8CP/FULDasMr8/dkH+k+itCjXRkcm3bC932jHI5p+6T80Skk77abtehH6rPRSYLc8bnNDgi1pkpI3mPlomI2ssTZ4cLwHNc0tcDodxBXOLfc8tge4Zvsz64XamMnQO/Pf1Wzum34ZGMce7K3LlI0ZeYBHgEB2j2nlmL4rCWCNpLJLS4Y6u0cyBlMLqb3HLcAdUpRUlydceVwdoF3Rd7phRgqd9Bu5nctNdWysMDu1kpJIDVop3I+YH3ncz4IFct+vsow4S6MmrqmNlOLm0pny38lobx2ghFndM2RpYMq6nF+HDqXbqKYYkuTpl1Mp8LhGO+0u9DK5tiiNXP70p/DHXf1080Guy6auoNBl+yuxWRzMUkmc0vffXMtB91ngMkbuuERQF5Gg+JXRmYDMsIMuFuedOivPhYypcaMZrxc78IUt2+zhktDveIOHqdAFBbYwBWU+ys7cT8/elOZbz/ACCVANbjlFT7Nn3R61Q6+YYWf9QB++uVeo3FWI3SvYZnu7MkUqdIWHMMY3e8jXhVA7RFGa9nGXDfI81J503KZQUlTHGbg7QhhqozZAm2SbCS3dqOXEKz268/JFwk0erimpxUio+zqN0QVqSQKDGpTZboj7BMlgyU5eml9U7YikYlGYFdLCmFqtSFRU7BeMCsJjinbFSK0kK8pyvJ2Kj6ADUj3gKQBUL0dRp6LU+Dz7GPmbJI1mueI9G5/QJl5zFoxjcanwQbZF2OaZ9SQ1uEci53/qiVplwuo4ZHI8Cnj5VkSlYDvKIduHD3LSwt5B/vNPmKePNZa2SGO08nih6t0R+82ujaYSe7ix2eTcHA1DD4gU8Qgm2jKYJWigq19OTqH4Vp4LoQFbzytMTvxRgfAIneDu7GQh1s7ws7+LR9ERtrfZt6/RAEt9vLrIHt1Y6td/FR2aFhs7cDQ0agNo0DyU9nGOzys34Q7y1Qa6rbSzNbvFQfNIZHb7FHQk0865+PgiV1XbE1geWjCwY897iMj64KjFZ8VK8q5IntBLggwDLFRAgdY3GVz5DoTQdP1Ri8hhs9B1PiqNghwsa3z671fLg9kg4FvwQBTtDgXWWzgVJd2rujBjFeRLQPFRXpG2SYRE+xs/tp3fieT3R5gnwCq7OWrtbXaZ3e7DH2TeFSau+DB5qvDAZIqvq5s0hlcxtaynSNldzGtArxJI4pgMmlNp9ofZ2ZlcFfvcwN/wBVTtcuIUjaacTlX9EblsQDe0tBxYR3YmUDWDcOAQW8ppHDKkbfwt18SgQAcaSAb8x8FdDCh0EftmUqRizPXJHJKLFquJI9HR+h/wDSkY0jWUKmkKhJWdGocWp7Igog5LjQIldQKtIQmzCqgwniqSEx7nBRPSuao3KkhDcS8mOC8qEd+FpCGX+HOjIac6Krb3ujzUbLzqM1plJdGBRtWM2Eu58VnlMhqXymn9rQPqXeSIWnMEO09fqiLG4YmDTKp6uz+qE2xy6xVI4sz97HA0tf3ojx1ahV/wAeOwNOLFhDm4uIDjhr/wCNEUvAmhBGRBr5IPYamz2mE7qPb0cKO+TfNUSFrvbjslmfyp8UVtDasCH7MMrd0PJ31/NE5D3fJIYl1upJh/E1zeuSykDsMr2bsRy9dEbitFJoz/W3/IfmUFvUYLY4c/qUAaS7G4nDz+CS84scjQdAa+G5SXI7u19ZKxgz8KIAqPNPAU8tE2wyeylPGq9asgeYVSyyUY4cQfjVAwLszMRZbWGe++dzRzLhhH0WrssH3GHBDCxsZf8AedhFKA/HxWS2GBM08e8SCQDmAQD/AKi0+C6BHZcLGCncqRX8bwCSemR5IYJAi0QGQjIhg9yMak/idxKAXwYmH2hL3/8A5R7uTnbugr4LS2xzpKtjJa06uGTnbqNO4c0LtF2tYMhT1qUCZiZbfI6VowNjYDk0cc6VO8qy95Va3UDwf6h80SlYFj1XDTN+j5jJFB0hURcVYkYFC4LOjWMLiml5XnFRuKpIR50hSGQphKjLlaRLZI6UpnaJtU0lFCsc5y8oHuXkyWztV/n2VVl7HKZZ44h997W+Fe98Ko/bbUHw+Cq7F2NrrWX0zjY4jq6jfkXLrKO6SMSflNjeVoa3nyH1WbtttduFEYvaeNnvva081mLXODm14I+HH6LScWB7ytRNa13/AL+uCC3TbMFpDScpGvi8xiHxaPNX71lDq50IrkdCsoYJpJmiFjnlr2l1KANz1LjkNE7oFFvo6ZsocNk7M6tdI3xDyW/AtKIRvxNI4Cvz/NZ2xGeI4jHk7NwBBAcB7w37qFEbLekbX65OByAJIy0PBSmpdcjlFx9SoFdvWZjd5eP8lHtL/wA6/wDuViK6ZP4ps9WdkHhwOKhIrmQKcjrTkqW0b62s+uCog1d2ZM8forUuhVS7j3Bz9fRLbJ6Dr+6QyC2PGnM/JCXT0PKgTbZb6CvrMofZ2yWhwZG2tXNaXbm10JO7Q+SBrkMfZ/dLu3mtDvcdVjW75HEtJPJopQnmtbaHVlAPtHUwiNlAxgOZqdNw8lE6JkELWDEGN7tW1xPI1Apnx0zKdYJsUbnyDshKC2GL3XDI9939R1A3Ur04Nyk+DdBQxx5FvqIutcBx1wxSBzGCjWNJbQu41OQ8eBQm/JaNd3KZc+matusrMAHfOHNwxkFxA95+EguOW+vJZe/bUwtIaaEa6+Rqu0VRjySUnwZG9H97JFCSs/apSXDqtE54WXV/iatF+X6K0gJURjKsOkTrPC+T3RVZkmbG0im6JNMSvS2WQasPkqslRuPkqpoVplV8KidCp3SJpeqViZD2aY5qnLkxzkxFVzF5SOK8mS0bq7rUS3CeC0GwhpPKP+2D5OH5qhFdYDajgrmxTwLW8f8Aad8HsXXHJWk+zzYy8tBy12GJr3SPaHurlUBxqdGtB3rJ7USFrg2lZHaQxMa5wG7HI7Rbe3OocWuEGn9yz1pHZVwAOnk1cdW15rSI5ztC18bSJsLHHPsy4OfyqWijehIK3n2c3O1tjjIILpAHvORzIFBXfQUHgkhsLWVrnTvSOpm52obnuSWGaaE9o0mrjUR5YabhTdlvUZI7kdcM1BmtkuQOGfyC5BaLe8OMDGsa98uE5vLjK52HMEkDva50y03LrUO0THMq4GNwFSHcuBGRC5Ey3xuvljnEBpnx1OlSDQk7qvI808FRtFai5JNm6igJmFPdyFOAGQHl8lq7NCwCmEEDkENs0GZO9Ovi1CGzvcTQYST09fJBwAG0F6m0T/wsDi1ooZXt7pDQfdaRpU/IqTaGw4bGxrHOBMsYc7EceEEZFx9FUtibJSE2iQUMpL89f6RXkKLRStEkT2HfmEwI7HdsEeEiNtaEYjmQabieqS2taIRhAGCRrqAUGXRJZHHDhOoyT3txNc0518kwHWg42EA5ij25b2mqhmcJoSytC6jmne14zFPEJY2loHLJU5oix1Roc6cD0SAH2i8nFueTm5OHMLJXvPUmm9aa9YanGN+vVZi3xjMpoQJsUGOUDhmfBGXxlR7PwVxvpvwj5n6IhLHyWDUTudfB6elhUL+ShgWn2Iizd63LPuCPbKTYHEo0/wDIh6j+Nmrmsrd7Qq5uyN2rR5Kb+NDk+KSq9Vo8lNnLb9s4bO8NFAChroyjV+H/AOxJ/chr3rypvzM9iHpRAIymOjU5lUTpUuRkfZJUpmSJiN/Y7XLgoRTJWdk4nttocdCx7fhX/aleCDQiiJXLZZS9kjWktDszy0PwKUE3NMzS08Iq7DF4SVQOckVO870XtjTWnBDpjQ5r0DGDLTK4gNG81P6qB1mkec303dB+yvl7VFLIKGnD0UAUnWaIZySuO6gyoBwVeS20GCzmVrakmjYyX8aucwlTPDa9FILYxuYFTuoD64oAnu28rU0CuERtFPakue4dRnXmaq5e9pjtEJa4OocJwjN1PvNp1yqhjQXe0ndhaMw3grF32jtZGYWUZjFCQBl06IAns/ayEAMMULQGsadTTeiccdN6xdovaZtrdGx5wNHuuJIOdDTOo80aivdmQc6jjuJFCeTvzolQBowgHVNLwP3Q2020itahC5L2/JAGl/iAoZ3Ag5rNf8VFdU2W/GjU06miQFq1iqyd8SZ4QKkmlACSSdABvKK2jaWKhANemfy6rSfZndUM0v8AFPBe5v8ALBHca78XNw3cPJO6GlZaunYWaKzsDi0OpicKVo52ZBNd2ngqc9xy1Io3rVbraO9HRtNFQuqOOce/V2pXHw8UmzSsuSEfoxMuzMnFo8U1l3OgBJcDXgtntRd8kUNYak8gCRzXLL9t9sZ72Jw5ii74sGOL3I5ZNROS2tB6yzurqj93y69Fz3Zq9pJHEPaRRbK7J+9TSoWhmVKjGXy89vJ/cVTetNf10xxkydrUk1IyKzsmA715OSLUmexjmnFFGV1FCHK++McVE6IJWXRV1yXlchhAcCvJpoaidok7GcZ913kVcuqY2YYSMTNxGo6oTLZCdEkEsrDmajmuOHPNO2icmGLXDE2gtjXvrFJgJ1BBpXwQB0U7zlKx3i4fNv1WrtEEMg74oTvQu0bOOGcZxBavHb6MvgR9+AU2yzjWNx44Ri8e6o5rQB7wIPAgj5ovdcbxPG12Id4a8s/otBfNhbNG6NwqC0+YzHyXaGTfycMuPY6Oby2xpKb/AMRY3M0rxV2DZCIwnEDUSa4nZA/srcWyNlLQezBcBkSK/NdDmZ2S+2PIGb6H3WguHiG+CK2W+XxxueyzyvkIIYMOFraile8UVjsbGZABtOQHinlo3euSAOfSXfbJBiwiOQOPerXuupWopqpW7Ng5zOfIf6jlXoMlvDCPH1n8T5KraGgbh69BFgYya5A3Nhc3dk4hUpoJR99/mdy11o6VQ+UVBTAyMpfve/8A1FV3UHVFjZ6k1G9NksDac0wsDh5quqfYpe2c1ndylZ/i8f4fFcxmgoVt/sbjxW93AWd58ccVPmih2dP2qacOIioBBPQIZZ9qLJoxjy5ozwRuNPILV2qFsgo7Mc0Dbc7bOS6FzRXMtdmPA6hGLFtb+xzyWl9Gft/2gxk4I2udTUFpbTzWQ2l2yJFOyp5LcPvKxSTASMaJRkDTXo4a+KrbWWSzdmThbWnBVST5Qrb6Mt9nV2utccktQ3vEAdFp5bgtDK4RirlksRs/bXxYuxxgYtGgkLX2ba+1htDE53PA5CzLqingdXZZs32cWeQYpS/Ecz33fKqn/wDjGx1+9/qd+a9d+0FqlcB2DweNKD4qjfu1dtgeR2Jw8SCR5hTx2x7X0mXnfZ3Zx7rfMuP1Ss+z+Ibh5fmVmz9oNrOQYB66qtJtlbyNw8FDlj+i1jymvn+z+FwoDh5gALyx9l2otrgcbqGuVF5TuxFqOZdM6OwJS0KvYrxZM0EZO3hTuJGqwtOPZoTT6BV62ijsNKqhFeE8JqzMfhKI3lTFVCTM5xIAosbbjJtGyCTjTRobsv2OWRrXswyVy69UalGaytwXfWdrnH3QXeNKD5/Bap505henpZOULZ5mriozSXwCTDRz2fi066hDon0y9ao5bG6OGoQK8mUdUA0PqnzWkyEEwBPrTeo2+X5qKV29MxDrr+yYFzEPW7JULW7y9fopHjn16ZZqjbJPP1+qABtrlpp5qh2vP9qZKe1Sj19FSDwUxCvCgkYrAyG/RRSA0zy9FAAmdneWo+zO9WWaeQvaSXsoKbgDV308lmrUe8luizPknjbHXFiBqNwGpPgiTqLZUeWjfXrtJIZHYS/ATkKkFZW/77eHZulpwJctTa7vdh561Wdt8NfeOJZVq4SXP+mxaaSfADsO0AikEmFxI4gopeu27pm0ER8lVks3JXLus8VayDohaqEVwipaWcnyyjs/tRNZi4tiLq50I/VdCuP7QopI6zM7Nw3Uqss2zxhkrqVAbXgsYbzFcl3x6nerSOc9IovlnbW7Z2euUlBww6/BNte39l0wl/h+a4r/ABp4Jjrc7gU3lk/gFggvk6Reu1Fjm/6GE8aCvwWfN6NBNNFknWx/NIbY7gVykt3Z1j5ejVC8mnkvLIPtDickijw0WpM7JZpCHZI1DeRGTsws2NURfolPkzdBaWj8wVCIQFBdavWrRZZ443Zrx5JUJBL2bg4HT4jeEebM1zatNR6+KzJ0RC5fveC7aeW17V7nLUw3Ld7oIPk3Ibam5EEdFbk3KJ+niFtPPM3O7A6hGXrJROlHHmrd7evgg82qYFl9qbx8NT09cVSmtDdBi8ASpZvoPmFPd3vO9bkABpbOD9x3HNMwNbqBVGrVqPH5LM2zf0b8kxE8loGgVC02hrQSXD4KrN7p6fRALRqVQUXLTb2VyNen5rX7JuYIA9vdcahx31B0rwpRc9hWw2X/AJTv7voFl1qvEbNFXi0aee3vwlpIPNDHgbyo5lWfqvJUT2Oid7m7lHUclWKa1XsQrDQp/By8SQFz+3QhsgoKLdt/5F/94WOvD3h0XpYfLiPLytvOx7E15HBSx6JXrlss2vJx0U3EcFE7ofJXwmuVKBzeSwbgP4SvK89eVk7mf//Z",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      text: "Exceptional service and a beautiful room with breathtaking ocean views! The attention to detail was remarkable - from the welcome amenities to the turndown service. The restaurant on-site served incredible cuisine, and the staff went above and beyond to accommodate our special requests. I will definitely be returning!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArf6JKAv0yEb1c9qNEd16jfGZOAeociKtpg&s",
      date: "January 2024",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      text: "Outstanding hospitality and world-class facilities! The room was spacious, elegantly designed, and equipped with all modern amenities. The business center was perfect for my work needs, and the evening entertainment was delightful. This hotel truly sets the standard for luxury accommodation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoSmJrueVy0ethOD2Iu4uGgjfAjJwsH7MFg&s",
      date: "April 2024",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const renderStars = (rating:number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of guests choose us for their perfect getaway
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-100 leading-relaxed font-light italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-300">
                        {testimonials[currentTestimonial].location}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      priority
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-sm text-center">
                    <div className="text-2xl">★</div>
                    <div>{testimonials[currentTestimonial].rating}.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-white shadow-lg scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "10,000+", label: "Happy Guests" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "95%", label: "Return Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
