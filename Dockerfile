FROM mhtsbt/dotnet:1.1.0

COPY ./ /app/

WORKDIR /app

RUN ["dotnet", "restore"]

WORKDIR /app/src/GogsBoard

ENV gogsurl=url
ENV gogstoken=token

EXPOSE 5000
ENTRYPOINT ["dotnet", "run"]