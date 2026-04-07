import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class CartSimulation extends Simulation {

    HttpProtocolBuilder httpProtocol = http
        .baseUrl("https://demowebshop.tricentis.com");

    ScenarioBuilder scn = scenario("Ecommerce Load Test")

        .exec(
            http("Open Home Page")
                .get("/")
                .check(status().is(200))
        )

        .pause(1)

        .exec(
            http("Open Product Page")
                .get("/141-inch-laptop")
                .check(status().is(200))
        )

        .pause(1)

        .exec(
            http("Open Cart Page")
                .get("/cart")
                .check(status().is(200))
        );

    {
        setUp(
            scn.injectOpen(atOnceUsers(10))
        ).protocols(httpProtocol);
    }
}